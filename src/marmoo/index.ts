import { OctreeQuantization } from "@marmooo/color-reducer";
import { toSVG } from "@marmooo/imagetracer";
import fs from "fs";
import { PNG } from "pngjs";
import sharp from "sharp";
import { getBufferFromLocal } from "../utils.js";

export async function marmooIt(path: string) {
  let buffer = getBufferFromLocal(path);
  buffer = Buffer.from(await sharp(buffer).blur(0.9).toBuffer());
  fs.writeFileSync("marmoo.png", buffer);
  const img = PNG.sync.read(buffer);
  const quantizer = new OctreeQuantization(img.data, img.width, img.height);
  quantizer.apply(16);
  const indexed = quantizer.getIndexedImage();
  const repl = quantizer.replaceColors;
  const svg = toSVG(indexed, img.width, img.height, repl, {
    scale: 1,
    pathomit: 16,
    ltres: 2,
    qtres: 1,
  });
  fs.writeFileSync("marmoo.svg", svg);
}
