import net from "net";

const server = net.createServer((client) => {
    console.info("Client Connected");

    client.addListener("data", (data) => {
        console.info(`Receive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    })
});

server.listen(5000, "localhost");