// digunakan pemanggailan berulang kali dalam waktu 1 detik
setInterval(() => {
    console.info(`Start time at ${new Date()}`);
}, 1000);


// setTimeout pemanggilan sekali selang waktu 1 detik
setTimeout(() => {
    console.info(`Start time at ${new Date()} setTimeout`);
}, 10000);

