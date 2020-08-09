/**
 The 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit number, 134217728=89, is a ninth power.

 How many n-digit positive integers exist which are also an nth power?
 */
'use strict';

const l = console.log;
let amount = 0;
for (let x = BigInt(1); x<BigInt(300); x++) {
    for (let y = BigInt(0); y<BigInt(300); y++) {
        const r = BigInt(x**y);
        if (((r+'').length) == y)
        {
            l(Number(x),'^',Number(y),'=',Number(r), 'length(',Number(y),')');
            amount++;
        }
    }
}
l('done', amount);
