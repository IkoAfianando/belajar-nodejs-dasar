import net from "net";

const client = net.createConnection({
    port: 5000,
    host: "localhost"
});

client.addListener("data", (data) => {
    console.info(`Receive data from Server : ${data.toString()}`);
});

setInterval(() => {
    client.write(`${process.argv[2]}\r\n`)
}, 2000);

