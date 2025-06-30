import potrace from "potrace";
import { getBufferFromLocal } from "../utils.js";

export async function posterize(path: string) {
  const buffer = getBufferFromLocal(path);
  const poster = new potrace.Posterizer({
    steps: 4,
    background: "#fff",
    turdSize: 100,
  });
  return new Promise<string>((resolve, reject) => {
    poster.loadImage(buffer, (err) => {
      if (err) reject(err);
      const svg = poster.getSVG();
      resolve(svg);
    });
  });
}
