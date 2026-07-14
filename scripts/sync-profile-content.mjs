import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function syncContent({ sample, local, runtime }) {
  mkdirSync(path.dirname(runtime), { recursive: true });

  if (!existsSync(local)) {
    copyFileSync(sample, local);
    console.log(`Created ${path.relative(root, local)} from sample.`);
  }

  const source = existsSync(local) ? local : sample;
  copyFileSync(source, runtime);
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
