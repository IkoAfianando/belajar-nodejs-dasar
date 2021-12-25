class FizzBuzz {
    constructor(name) {
        this.name = name;
    }

    fizzBuzz(data) {
        for (let i = 1; i <= data; i++) {
            const data1 = i % 3 === 0 && i % 5 === 0;
            const data2 = i % 3 === 0;
            const data3 = i % 5 === 0;
            debugger;
            if(data1) {
                console.info(`FizzBuzz ${i}`);
            }else if(data2) {
                console.info(`Fizz ${i}`);
            }else if(data3) {
                console.info(`Buzz ${i}`);
            }else {
                console.info(i);
            }
        }
    }

    sayHello(name) {
        return `Hello ${name}, My Name is ${this.name}`;
    }
}

const fizzBuzz = new FizzBuzz("Iko Afianando");
fizzBuzz.fizzBuzz(100);
console.log(fizzBuzz.sayHello("Joko"));

module.exports = FizzBuzz;