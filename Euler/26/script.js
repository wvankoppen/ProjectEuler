/**
 A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

 1/2	= 	0.5
 1/3	= 	0.(3)
 1/4	= 	0.25
 1/5	= 	0.2
 1/6	= 	0.1(6)
 1/7	= 	0.(142857)
 1/8	= 	0.125
 1/9	= 	0.(1)
 1/10	= 	0.1
 Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

 Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */
'use strict';

const l = console.log;

function divide(denominator) {
    let ret = '';
    let n = 1;

    for (let i = 0; i < 20000; i++) {
        if (i > 0) {
            ret += Math.floor(n / denominator);
        }
        n = n % denominator;
        n *= 10;
        if (i > 0 && ret.length % 2 === 0) {
            const leftPart = ret.substr(0, ret.length / 2);
            const rightPart = ret.substr(ret.length / 2);
            if (leftPart === rightPart) {
                return leftPart;
            }
        }
    }
}

for (let i = 0; i < 100; i++) {
    l(divide(i), i);
}

