/**
 A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

 The text file, keylog.txt, contains fifty successful login attempts.

 Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.



 */
'use strict';

const l = console.log;

const results = new Set();
let shortest = Number.MAX_VALUE;

function combine(orig, remaining, start) {
    if (remaining.length === 0) {
        if (orig.length < shortest) {
            shortest = orig.length;
            l('shortest', shortest, orig);
        }
        if (orig.length <= shortest) {
            results.add(orig);
        }
        return;
    }
    for (let x = start; x <= orig.length; x++) {
        if (remaining.length > 0) {
            const l = orig.substr(0, x);
            const m = remaining.substr(0, 1);
            const r = orig.substr(x, orig.length - x);

            let newOrig;
            if (l.substr(-1) === m || r.substr(0, 1) === m) {
                newOrig = l + r;
            } else {
                newOrig = l + m + r;
            }

            const newRemaining = remaining.substr(1);
            combine(newOrig, newRemaining, x + 1);
        }
    }
}

const logins = [
    319,
    680,
    180,
    690,
    129,
    620,
    762,
    689,
    762,
    318,
    368,
    710,
    720,
    710,
    629,
    168,
    160,
    689,
    716,
    731,
    736,
    729,
    316,
    729,
    729,
    710,
    769,
    290,
    719,
    680,
    318,
    389,
    162,
    289,
    162,
    718,
    729,
    319,
    790,
    680,
    890,
    362,
    319,
    760,
    316,
    729,
    380,
    319,
    728,
    716,
].map((e) => e + '');

results.add(logins.pop());

logins.forEach((l) => {
    const loop = Array.from(results);
    console.log('LOGIN', l);
    shortest = loop.reduce(
        (acc, curr) => Math.min(acc, curr),
        Number.MAX_VALUE
    );
    results.clear();
    loop.forEach((r) => {
        combine(l, r, 0);
    });
});

l('done', results);
