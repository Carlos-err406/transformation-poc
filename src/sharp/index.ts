import sharp from "sharp";
import { getBufferFromLocal } from "../utils.js";

export async function toPng(target: string | Buffer) {
  let buffer = target;
  if (typeof target === "string") buffer = getBufferFromLocal(target);
  const pngBuffer = await sharp(buffer).png().toBuffer();
  return pngBuffer;
}
