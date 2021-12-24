function samplePromise() {
    return Promise.resolve("Iko");
}

const name = await samplePromise();
console.info(name);