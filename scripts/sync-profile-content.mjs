import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

/**
 * Sync profile content for local dev vs deploy:
 * - profile.local.ts exists → copy to profile.runtime.ts (local edits win)
 * - no local file → keep committed profile.runtime.ts (Vercel/CI uses this)
 * - neither local nor runtime → bootstrap both from sample (first-time setup)
 */
function syncContent({ sample, local, runtime }) {
  mkdirSync(path.dirname(runtime), { recursive: true });

  if (existsSync(local)) {
    copyFileSync(local, runtime);
    return;
  }

  if (!existsSync(runtime)) {
    copyFileSync(sample, runtime);
    copyFileSync(sample, local);
    console.log(
      `Created ${path.relative(root, local)} and ${path.relative(root, runtime)} from sample.`,
    );
    return;
  }

  copyFileSync(sample, local);
  console.log(
    `Created ${path.relative(root, local)} from sample. Using committed ${path.relative(root, runtime)}.`,
  );
}

syncContent({
  sample: path.join(root, "lib/data/profile.sample.ts"),
  local: path.join(root, "lib/data/profile.local.ts"),
  runtime: path.join(root, "lib/data/profile.runtime.ts"),
});

syncContent({
  sample: path.join(root, "components/profile_img/profileMap.sample.ts"),
  local: path.join(root, "components/profile_img/profileMap.local.ts"),
  runtime: path.join(root, "components/profile_img/profileMap.runtime.ts"),
});
