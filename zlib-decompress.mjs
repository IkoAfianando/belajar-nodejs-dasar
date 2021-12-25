import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs.txt");
const result = zlib.unzipSync(source);

console.info(result.toString());
