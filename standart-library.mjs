import os from "os";

console.info(os.platform());
console.table(os.cpus());
console.info(os.networkInterfaces());
console.info(os.version());
console.info(os.release());
console.info(os.totalmem());