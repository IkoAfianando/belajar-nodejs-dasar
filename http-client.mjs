import https from "https";

const endpoint = "https://hookb.in/jedDBXGN11F9dlMMdjRZ";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Iko",
    lastName: "Afianando"
})

request.write(body);
request.end();