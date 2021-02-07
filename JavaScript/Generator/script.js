'use strict';
let numbersFrom = start => ({[Symbol.iterator] : () => ({
    next: () => ({ value: start++, done: start > 10 }),
})});

for (let x of numbersFrom(6)) {
    console.log(x);
}
