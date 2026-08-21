# sveltia-cms-auth

A small Cloudflare Worker that lets Sveltia CMS (the editor at `/admin`) sign
editors in with GitHub. Sveltia opens a popup to this Worker, the Worker runs
the GitHub OAuth handshake, and hands a token back to the CMS. Vendored from
[sveltia/sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)
(MIT licence, see `LICENSE.txt`) with no logic changes.

This Worker is deployed separately from the main site. It does not touch the
Cloudflare Pages project or its build.

Deployment, GitHub OAuth app setup and secret configuration are one of the
"human steps" for this project. See the setup instructions given alongside
this migration (also summarised in `CLIENT-EDITING-GUIDE.md`) for the exact
`wrangler` commands and required environment variables
(`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `ALLOWED_DOMAINS`).

Once deployed, the resulting Worker URL must be set as `backend.base_url` in
`public/admin/config.yml`.
