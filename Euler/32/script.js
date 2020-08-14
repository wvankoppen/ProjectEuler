/**
 We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

 The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

 Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

 HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */
'use strict';

const l = console.log;
const products = new Set();

for (let i = 1; i < 100000; i++) {
    for (let j = i; j < 100000; j++) {
        let p = i * j;
        let str = '' + i + j + p;
        if (str.length !== 9) {
            continue;
        }
        let cand = str.split('').sort().join('');
        if (cand === '123456789') {
            products.add(p);
            l(i, j, p);
        }
    }
}
l('done');
l(products,products.size);
