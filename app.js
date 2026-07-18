/**
 * cPanel Node.js startup file for the public website.
 * In cPanel → Edit Application → Application startup file: app.js
 *
 * Before restart, run in the app root (SSH or Terminal):
 *   npm install
 *   npm run build
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== "production";
const dir = __dirname;

const buildIdPath = path.join(dir, ".next", "BUILD_ID");
if (!dev && !fs.existsSync(buildIdPath)) {
  console.error(
    "[website] Missing .next build. Run `npm run build` in this folder, then Restart the app in cPanel.",
  );
}

const app = next({ dev, dir });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`[website] Ready on port ${port} (dev=${dev})`);
    });
  })
  .catch((err) => {
    console.error("[website] Failed to start Next.js:", err);
    process.exit(1);
  });
