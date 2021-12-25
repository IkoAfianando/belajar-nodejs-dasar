import util from "util";

const firstName = "Iko";
const lastName = "Afianando";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Iko",
    lastName: "Afianando"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));