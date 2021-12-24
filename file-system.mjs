import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("temporary.txt", "Hello Node.js")

