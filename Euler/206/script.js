/*
Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0 (length 19), where each “_” is a single digit.
*/

'use strict';

const l = console.log;
const min = 1020304050607080900;
const max = 1929394959697989990;
const first = Math.floor(Math.sqrt(min));
const last = Math.ceil(Math.sqrt(max));
const space = (last-first);
l(space);

l(Math.random());




// const start = 1192213971 ;
// const eend = start + 100;
l('range',first,last);

for (let i=first; i<last; i++){
    const square = i**2;
    const s = square + '';
    // if (s.substr(0,1) !== '1') continue;
    if (s.substr(2,1) !== '2') continue;
    //
    if (s.substr(4,1) !== '3') continue;

    if (s.substr(6,1) !== '4') continue;
    if (s.substr(8,1) !== '5') continue;
    if (s.substr(10,1) !== '6') continue;

    if (i%1000 < 10) {
        l((i-first)/space);
    }

    if (s.substr(12,1) !== '7') continue;

    if (s.substr(14,1) !== '8') continue;

    if (s.substr(16,1) !== '9') continue;


    if (s.substr(18,1) !== '0') continue;
    l(i, square, (square + '').length);

}

l('done');
// new Array(1000).fill(0).map((x,i)=> i + start).forEach(x=> {
//     const square = x**2;
//     l(x, square, (square + '').length);
// })