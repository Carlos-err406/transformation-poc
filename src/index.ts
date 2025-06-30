import { mkdirSync, writeFileSync } from "fs";
import { posterize } from "./poster/index.js";
const OUTPUT = "output";
const DATA = "data";
async function main() {
  const svg = await posterize(`${DATA}/step-design-from-image.png`);
  writeFileSync(`${OUTPUT}/posterized5.svg`, svg);
  // await marmooIt(`${DATA}/tiff-sample.tiff`);
  // const pngResult = await toPng(`${DATA}/tiff-sample.tiff`);
  // const pngResult2 = await toPng(`${DATA}/svg-sample.svg`);
  // writeFileSync(`${OUTPUT}/tiff-sample.png`, pngResult);
  // writeFileSync(`${OUTPUT}/svg-sample.png`, pngResult2);
}
mkdirSync(OUTPUT, { recursive: true });
main();
