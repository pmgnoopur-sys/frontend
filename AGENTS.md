<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Verification

- Run targeted lint from `frontend`: `npx --no-install eslint <changed-file>`.
- Run type checks with `npx --no-install tsc --noEmit --incremental false`.
- If Node exits with `Fatal process out of memory: Zone` during type checking, the lower-memory fallback verified on Windows is `node --jitless --max-old-space-size=2048 node_modules/typescript/bin/tsc --noEmit --incremental false`. This keeps all TypeScript checks enabled.
