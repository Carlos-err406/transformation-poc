import fs from "fs";
export const getBufferFromLocal = (path: string) => {
  const buffer = fs.readFileSync(path);
  return Buffer.from(buffer);
};
