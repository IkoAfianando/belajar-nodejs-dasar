const buffer = Buffer.from("Iko Afianando", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));
console.info(buffer.toString("base64url"));

const bufferBase64 = Buffer.from("SWtvIEFmaWFuYW5kbw==", "base64");
console.info(bufferBase64.toString("utf-8"));
