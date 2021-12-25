import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Iko\n");
writer.write("Afianando\n");
writer.write("Iko\n");
writer.write("Iko\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});