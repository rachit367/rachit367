const fs = require("fs");
const path = require("path");

const USER = "rachit367";
const README = path.join(__dirname, "..", "README.md");
const START = "<!-- oss-log:start -->";
const END = "<!-- oss-log:end -->";

async function searchPRs() {
  const items = [];
  for (let page = 1; page <= 3; page++) {
    const url = `https://api.github.com/search/issues?q=author:${USER}+type:pr+-user:${USER}+is:public&per_page=100&page=${page}&advanced_search=true`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    if (!res.ok) throw new Error(`GitHub search failed: ${res.status} ${await res.text()}`);
    const data = await res.json();
    items.push(...data.items);
    if (items.length >= data.total_count) break;
  }
  return items;
}

function repoShort(pr) {
  return pr.repository_url.split("/repos/")[1].split("/")[1];
}

function cleanTitle(title) {
  const t = title.trim().replace(/\|/g, "\\|");
  return t.length > 90 ? `${t.slice(0, 87)}...` : t;
}

function row(pr, level, isoDate) {
  return `| \`${isoDate.slice(0, 10)} [${level}]\` | [${repoShort(pr)}#${pr.number}](${pr.html_url}) | ${cleanTitle(pr.title)} |`;
}

const TABLE_HEAD = "| log | PR | what shipped |\n| :--- | :--- | :--- |";

function buildSection(items) {
  const merged = items
    .filter((pr) => pr.pull_request?.merged_at)
    .sort((a, b) => b.pull_request.merged_at.localeCompare(a.pull_request.merged_at));
  const open = items
    .filter((pr) => pr.state === "open")
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
  if (merged.length === 0) throw new Error("no merged PRs returned, refusing to rewrite the log");

  const recent = merged.slice(0, 5);
  const archived = merged.slice(5);
  const openRepos = [...new Set(open.map(repoShort))];

  const lines = [];
  lines.push(TABLE_HEAD);
  for (const pr of recent) lines.push(row(pr, "merged", pr.pull_request.merged_at));
  lines.push("");
  lines.push("```console");
  lines.push("$ wc -l /var/log/open-source.log*");
  lines.push(`  ${merged.length} merged upstream`);
  lines.push(`  ${open.length} in review${openRepos.length ? ` at ${openRepos.join(" · ")}` : ""}`);
  lines.push("```");
  lines.push("");
  lines.push("<details>");
  lines.push('<summary><code>$ zcat /var/log/open-source.log.1.gz</code> — full merge history + everything in review</summary>');
  lines.push("");
  if (archived.length) {
    lines.push(TABLE_HEAD);
    for (const pr of archived) lines.push(row(pr, "merged", pr.pull_request.merged_at));
    lines.push("");
  }
  if (open.length) {
    lines.push("| log | PR | in review |");
    lines.push("| :--- | :--- | :--- |");
    for (const pr of open) lines.push(row(pr, "open", pr.created_at));
    lines.push("");
  }
  lines.push("</details>");
  return lines.join("\n");
}

async function main() {
  const readme = fs.readFileSync(README, "utf8");
  if (!readme.includes(START) || !readme.includes(END)) throw new Error("oss-log markers missing in README");
  const items = await searchPRs();
  const section = buildSection(items);
  const updated = readme.replace(
    new RegExp(`${START}[\\s\\S]*${END}`),
    `${START}\n${section}\n${END}`
  );
  if (updated !== readme) fs.writeFileSync(README, updated);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
