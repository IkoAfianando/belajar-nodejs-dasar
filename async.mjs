function samplePromise() {
    return Promise.resolve("Iko Afianando KUN ADALAH SEORANG PELAJAR YANG BAIK DAN BENAR");
}

const name = await samplePromise();
console.info(name);