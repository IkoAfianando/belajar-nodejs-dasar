import {EventEmitter} from "events";

const emitter = new EventEmitter();
emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
});

emitter.addListener("hello", (name) => {
    console.info(`Halo ${name}`)
});

emitter.addListener("beda", (hobby) => {
    console.info(`My Hobbies ${hobby}`);
});

emitter.emit("hello", "Iko Afianando");
emitter.emit("beda", ["Iko Afianando", "Gaming"]);