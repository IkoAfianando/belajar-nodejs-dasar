import timers from "timers/promises";

// console.info(new Date());
// const name = await timers.setTimeout(5000, "Iko Afianando");
// console.info(new Date());
// console.info(name);

for await(const startTime of timers.setInterval(0, "ignored")) {
    console.info(`Start Time at ${new Date()}`);
}