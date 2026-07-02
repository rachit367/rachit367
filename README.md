<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:0d1117,50:161b22,100:0d1117&height=150&text=ssh%20rachit@production&fontColor=39d353&fontSize=34&fontAlignY=40&desc=Rachit%20Mittal%20%C2%B7%20Backend%20Engineer%20%C2%B7%20IIIT%20Kota&descSize=16&descAlignY=68&animation=fadeIn" />
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

| log | PR | what shipped |
| :--- | :--- | :--- |
| `2026-06-29 [merged]` | [pipeshub-ai#2606](https://github.com/pipeshub-ai/pipeshub-ai/pull/2606) | install etcd3 from a maintained fork for protobuf 4 compat |
| `2026-06-24 [merged]` | [better-auth#10198](https://github.com/better-auth/better-auth/pull/10198) | honor `disableMigration` on plugin schema tables |
| `2026-06-23 [merged]` | [mastra#18350](https://github.com/mastra-ai/mastra/pull/18350) | return per-metric similarity score from Chroma `query()` |
| `2026-06-20 [merged]` | [pipeshub-ai#2517](https://github.com/pipeshub-ai/pipeshub-ai/pull/2517) | zoom-level lock for document preview |
| `2026-06-20 [merged]` | [flowsint#185](https://github.com/reconurge/flowsint/pull/185) | detect MD5/SHA1/SHA256 file hashes on import |
| `2026-06-20 [merged]` | [flowsint#183](https://github.com/reconurge/flowsint/pull/183) | Technology entity type + `tech_detect` transformer |
| `2026-06-20 [merged]` | [flowsint#182](https://github.com/reconurge/flowsint/pull/182) | domain-to-DNS enricher built on dnsx |
| `2026-06-14 [merged]` | [pipeshub-ai#2506](https://github.com/pipeshub-ai/pipeshub-ai/pull/2506) | pin uuid for CommonJS compatibility |
| `2026-06-09 [merged]` | [pipeshub-ai#2507](https://github.com/pipeshub-ai/pipeshub-ai/pull/2507) | point the frontend env at the actual backend |

```console
$ grep -c "\[open\]" /var/log/open-source.log
15+
```

more in review at **payload**, **sourcebot**, **hyperdx**, **tooljet**, **newman**, **razorpay-node**, **typesense-js** → [watch them land](https://github.com/search?q=author%3Arachit367+is%3Apr+-user%3Arachit367&type=pullrequests)

### `$ ldd $(which rachit)`

<div align="center">
  <img src="https://skillicons.dev/icons?i=js,ts,python,cpp,nodejs,express,fastapi,react,mongodb,postgres,mysql,redis,docker,nginx,linux,git,githubactions,cloudflare&perline=9" />
</div>

### `$ htop`

<div align="center">
  <img height="170" src="https://github-readme-stats.hackclub.dev/api?username=rachit367&show_icons=true&include_all_commits=true&bg_color=0d1117&border_color=30363d&title_color=39d353&icon_color=39d353&text_color=c9d1d9" />
  <img height="170" src="https://github-readme-stats.hackclub.dev/api/top-langs/?username=rachit367&layout=compact&langs_count=8&hide=html,css,ejs&bg_color=0d1117&border_color=30363d&title_color=39d353&text_color=c9d1d9" />
</div>

### `$ watch -n 43200 contributions`

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/rachit367/rachit367/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/rachit367/rachit367/output/github-contribution-grid-snake.svg" />
    <img alt="contribution snake" src="https://raw.githubusercontent.com/rachit367/rachit367/output/github-contribution-grid-snake.svg" />
  </picture>
</div>

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
