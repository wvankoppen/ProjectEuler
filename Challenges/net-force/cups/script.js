/*
You have 5 balls that you have to divide (put the balls in the cups) between a number of cups in all possible ways.
1 cup:
---
|5|
---
1 possibility
Total: 1 possibility

2 cups:
-----
|1|4|
-----
|2|3|
-----
|3|2|
-----
|4|1|
-----
|5|0|
-----
|0|5|
-----
6 possibilities
Total: 7 possibilities

3 cups:
21 possibilities
Total: 28 possibilities

Continue until you have 500 cups. The total of possibilities from 1 to 500 is the answer.

*/

'use strict';

const l = console.log;
const possibilities = {};
const cache = {};

function sortText(text) {
    return text.split('').sort().join('');
}

function getPossibilityAmount(cupAmounts, remainder) {
    if (possibilities.hasOwnProperty(cupAmounts)) {
        //l('getPossibilityAmount ______', cupAmounts, remainder, {...possibilities});
        return 0;
    }
    // if (cache.hasOwnProperty(sortText(cupAmounts))) {
    //     const ret = cache[sortText(cupAmounts)];
    //     l('getPossibilityAmount cache', cupAmounts, remainder, ret);
    //     return ret;
    // }
    //l('getPossibilityAmount       ', cupAmounts, remainder);
    if (remainder == 0) {
        return 1;
    }

    const cups = cupAmounts.split('');
    const r = cups
        .map((c, i) => {
            let candidate =
                cupAmounts.substr(0, i) +
                String.fromCharCode(cupAmounts.charCodeAt(i) + 1) +
                cupAmounts.substr(i + 1, cupAmounts.length - 1 - i);
            let r = getPossibilityAmount(candidate, remainder - 1);
            possibilities[candidate] = r;
            const key = sortText(candidate);
            cache[key] = r;

            return r;
        })
        .reduce((acc, curr) => acc + curr, 0);

    return r;
}
const amount = 25;
let results = [];
for (let i = 5; i < 5 + amount; i++) {
    const r = getPossibilityAmount(''.padEnd(i, '0'), 5);
    l(r - results[results.length-1]);
    results.push(r);
}

l(results);


// 1= 1
// 2= 6
// 3= 21
// 4= 56
// 5= 126
// 6= 252
// 7= 462
// 8= 792
// 9= 1287
// 10 = 2002
