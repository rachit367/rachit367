<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:0d1117,50:161b22,100:0d1117&height=150&text=ssh%20rachit@production&fontColor=39d353&fontSize=34&fontAlignY=40&desc=Rachit%20Mittal%20%C2%B7%20Backend%20Engineer%20%C2%B7%20IIIT%20Kota&descSize=16&descAlignY=68&animation=fadeIn" />
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=17&duration=2800&pause=900&color=39D353&background=00000000&center=true&vCenter=true&width=640&height=40&lines=%24+whoami+%E2%86%92+backend+engineer;%24+ps+aux+%7C+grep+passion+%E2%86%92+distributed+systems+%C2%B7+voice+AI;%24+uptime+%E2%86%92+shipping+since+2023%2C+zero+downtime" />
</div>

```console
$ ssh rachit@production
Last login: Thu Jul  2 09:41:07 2026 from IIIT-Kota, Rajasthan, IN

  Welcome to rachit-mittal 4.0.0 LTS

  * whoami      : Rachit Mittal — backend engineer
  * working on  : multi-tenant school platform @ Gyanama · 250+ REST endpoints
  * also built  : a voice AI agent that answers phone calls in under a second
  * open source : better-auth · mastra · pipeshub-ai · flowsint · payload · sourcebot
  * education   : B.Tech ECE, IIIT Kota (2023–2027)

  0 packages can be updated. I patch upstream instead.
```

### `$ pm2 status`

| name | status | ↺ | what's running | source |
| :--- | :--- | :-: | :--- | :--- |
| `gyanama-api` | 🟢 online | 0 | Node/Express backend for a multi-tenant school platform — 250+ REST endpoints, JWT rotation + 5-role RBAC, Redis cache-first reads, 8-instance PM2 cluster behind Nginx | `private · work` |
| `voice-agent` | 🟢 online | 0 | real-time voice AI on Gemini Live over telephony — 16-bit PCM streaming, barge-in via VAD, session pre-warming pool, P95 time-to-first-audio < 800ms | `private · work` |
| `codeintelis` | 🟢 online | 0 | AI codebase analysis platform — multi-agent orchestration under an asyncio semaphore, SHA-256 content-hash caching, async FastAPI + SQLAlchemy 2.0 | [repo](https://github.com/rachit367/codeintelis) |
| `assignmento` | 🟢 online | 0 | AI assessment generator — BullMQ + Redis job queue, Socket.io live progress, multi-model LLM fallback chain with Zod validation | [repo](https://github.com/rachit367/Assignmento) |
| `yapyap` | 🟢 online | 0 | real-time chat — Redis presence tracking, per-socket message routing, JWT-verified WebSocket handshake | [repo](https://github.com/rachit367/YapYap) |
| `securestorage` | 🟢 online | 0 | cloud file vault — Google OAuth 2.0, chunked uploads to Cloudinary, per-user data isolation | [repo](https://github.com/rachit367/SecureStorage) |

### `$ tail -f /var/log/open-source.log`

<!-- oss-log:start -->
| log | PR | what shipped |
| :--- | :--- | :--- |
| `2026-06-29 [merged]` | [pipeshub-ai#2606](https://github.com/pipeshub-ai/pipeshub-ai/pull/2606) | fix(python): install etcd3 from maintained fork for protobuf 4 compat |
| `2026-06-24 [merged]` | [better-auth#10198](https://github.com/better-auth/better-auth/pull/10198) | fix: honor disableMigration on plugin schema tables |
| `2026-06-23 [merged]` | [mastra#18350](https://github.com/mastra-ai/mastra/pull/18350) | fix(chroma): return per-metric similarity score from query() |
| `2026-06-20 [merged]` | [flowsint#182](https://github.com/reconurge/flowsint/pull/182) | feat(enrichers): add domain_to_dns enricher using dnsx |
| `2026-06-20 [merged]` | [flowsint#183](https://github.com/reconurge/flowsint/pull/183) | feat(types,enrichers): add Technology type and tech_detect transformer |

```console
$ wc -l /var/log/open-source.log*
  9 merged upstream
  19 in review at hyperdx · sourcebot · pipeshub-ai · flowsint · payload · typesense-js · newman · razorpay-node · ToolJet
```

<details>
<summary><code>$ zcat /var/log/open-source.log.1.gz</code> — full merge history + everything in review</summary>

| log | PR | what shipped |
| :--- | :--- | :--- |
| `2026-06-20 [merged]` | [flowsint#185](https://github.com/reconurge/flowsint/pull/185) | feat(types): detect MD5/SHA1/SHA256 file hashes on import |
| `2026-06-20 [merged]` | [pipeshub-ai#2517](https://github.com/pipeshub-ai/pipeshub-ai/pull/2517) | feat(frontend): add zoom level lock to document preview |
| `2026-06-14 [merged]` | [pipeshub-ai#2506](https://github.com/pipeshub-ai/pipeshub-ai/pull/2506) | fix(backend): pin uuid to ^11.1.0 for CommonJS compatibility |
| `2026-06-09 [merged]` | [pipeshub-ai#2507](https://github.com/pipeshub-ai/pipeshub-ai/pull/2507) | fix(frontend): point NEXT_PUBLIC_API_BASE_URL at the backend (:3000) |

| log | PR | in review |
| :--- | :--- | :--- |
| `2026-07-02 [open]` | [hyperdx#2575](https://github.com/hyperdxio/hyperdx/pull/2575) | fix(app): keep trace waterfall span widths proportional when zoomed |
| `2026-07-02 [open]` | [hyperdx#2574](https://github.com/hyperdxio/hyperdx/pull/2574) | fix(app): prevent dashboard edits from clobbering each other |
| `2026-07-02 [open]` | [sourcebot#1417](https://github.com/sourcebot-dev/sourcebot/pull/1417) | fix(web): scope file-search recents by revision |
| `2026-07-02 [open]` | [sourcebot#1416](https://github.com/sourcebot-dev/sourcebot/pull/1416) | fix(backend): don't crash Gitea sync when a repo fetch returns a null body |
| `2026-06-23 [open]` | [sourcebot#1362](https://github.com/sourcebot-dev/sourcebot/pull/1362) | fix(web): return graceful error for unknown search context |
| `2026-06-14 [open]` | [pipeshub-ai#2531](https://github.com/pipeshub-ai/pipeshub-ai/pull/2531) | fix(indexing): stop dropping the first table data row in LLM enhancement |
| `2026-06-09 [open]` | [pipeshub-ai#2508](https://github.com/pipeshub-ai/pipeshub-ai/pull/2508) | feat(indexing): add JSON document parser |
| `2026-06-09 [open]` | [flowsint#186](https://github.com/reconurge/flowsint/pull/186) | feat(enrichers): make domain_to_website extractions opt-out |
| `2026-06-09 [open]` | [flowsint#184](https://github.com/reconurge/flowsint/pull/184) | feat(imports): add nmap XML importer |
| `2026-05-19 [open]` | [payload#16676](https://github.com/payloadcms/payload/pull/16676) | fix: write per-locale values from siblingData when req.locale is 'all' |
| `2026-05-19 [open]` | [payload#16675](https://github.com/payloadcms/payload/pull/16675) | fix: support @next/env without default export on Next.js 15.5+ |
| `2026-05-19 [open]` | [typesense-js#350](https://github.com/typesense/typesense-js/pull/350) | fix(types): use collection field in UnionSearchResponseRequestParams |
| `2026-05-19 [open]` | [newman#3360](https://github.com/postmanlabs/newman/pull/3360) | fix(secure-fs): skip deprecated fs.F_OK/R_OK/W_OK/X_OK on Node 24 |
| `2026-05-18 [open]` | [razorpay-node#476](https://github.com/razorpay/razorpay-node/pull/476) | chore(deps): bump axios to ^1.8.2 for GHSA-jr5f-v2jv-69x6 |
| `2026-05-18 [open]` | [razorpay-node#475](https://github.com/razorpay/razorpay-node/pull/475) | fix(types): allow string '0' \| '1' for fail_existing on customers.create |
| `2026-05-18 [open]` | [ToolJet#16453](https://github.com/ToolJet/ToolJet/pull/16453) | fix: invoke handleFailure when runQuery promise rejects |
| `2026-05-18 [open]` | [payload#16655](https://github.com/payloadcms/payload/pull/16655) | fix(db-mongodb): handle admin.condition in sparse unique indexes |
| `2026-05-17 [open]` | [payload#16649](https://github.com/payloadcms/payload/pull/16649) | fix: skip empty object write for untouched localized fields in mergeLocalizedData |
| `2026-05-17 [open]` | [payload#16648](https://github.com/payloadcms/payload/pull/16648) | fix(db-mongodb): handle admin.condition in sparse unique indexes |

</details>
<!-- oss-log:end -->

this log rotates itself — a [nightly cron](.github/workflows/logrotate.yml) pulls fresh entries straight from the GitHub API · [watch them land](https://github.com/search?q=author%3Arachit367+is%3Apr+-user%3Arachit367&type=pullrequests)

### `$ ldd $(which rachit)`

<div align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,python,cpp,nodejs,express,fastapi,react,mongodb,postgres,mysql,redis,docker,nginx,linux,git,githubactions,cloudflare&perline=9" />
</div>

### `$ crontab -l`

```console
0 6 * * *     pull upstream, read the diff, learn something
*/15 * * * *  glance at the P95 latency dashboard
0 22 * * *    one leetcode problem before shutdown
0 0 * * 0     ship at least one PR to open source
@reboot       replay the last production incident in my head
```

### `$ curl -X POST https://rachit.dev/contact`

```json
{ "status": 202, "message": "accepted — response within one event-loop tick" }
```

<div align="center">
  <a href="mailto:rachit367@gmail.com"><img src="https://img.shields.io/badge/email-rachit367%40gmail.com-0d1117?style=for-the-badge&logo=gmail&logoColor=39d353&labelColor=161b22" /></a>
  <a href="https://www.linkedin.com/in/rachit-mittal"><img src="https://img.shields.io/badge/linkedin-rachit--mittal-0d1117?style=for-the-badge&logo=linkedin&logoColor=39d353&labelColor=161b22" /></a>
  <a href="https://leetcode.com/u/rachit315/"><img src="https://img.shields.io/badge/leetcode-rachit315-0d1117?style=for-the-badge&logo=leetcode&logoColor=39d353&labelColor=161b22" /></a>
</div>

```console
$ exit
logout
Connection to production closed.
```

<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:161b22&height=110&section=footer" />
</div>
