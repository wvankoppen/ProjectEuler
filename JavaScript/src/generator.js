import { demo } from './bootstrapper';

demo(generator);

function generator() {
    let numbersFrom = (start) => ({
        [Symbol.iterator]: () => ({
            next: () => ({ value: start++, done: start > 10 }),
        }),
    });

    let numbersFromGenerator = function* (start) {
        yield* new Array(10 - start).fill().map((v, i) => i + start);
    };

    for (let x of numbersFrom(2)) {
        console.log(x);
    }

    for (let x of numbersFromGenerator(2)) {
        console.log(x);
    }
}
