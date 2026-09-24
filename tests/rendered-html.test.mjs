import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the seminar title and environment-backed participation links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /ChatGPT 앱 사용법/);
  assert.match(page, /process\.env\.KAKAO_OPEN_CHAT_URL/);
  assert.match(page, /process\.env\.ZOOM_MEETING_URL/);
  assert.doesNotMatch(page, /zoom\.us\/j\//);
});

test("uses the standard Next.js deployment scripts", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
});

