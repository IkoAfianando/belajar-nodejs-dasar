import fs from "fs";

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    const writeStream = fs.createWriteStream("to.log");
    writeStream.write(data.toString());
});