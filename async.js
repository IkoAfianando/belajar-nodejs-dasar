function samplePromise() {
    return Promise.resolve("Iko");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();