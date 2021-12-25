import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapakah nama anda?",(name) => {
    console.log(`Hello ${name}`);
    input.question("Apa Hobi anda?", (hobbies) => {
        console.log(`My Hobbies ${hobbies}`);
        input.close();
    });
});
