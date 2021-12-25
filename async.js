function samplePromise() {
    return Promise.resolve("Iko Afianando");
}

async function run() {
    const run = await samplePromise();
    console.info(run);
}

run();