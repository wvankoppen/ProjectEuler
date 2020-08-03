/* Let S(A) represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

S(B) ≠ S(C); that is, sums of subsets cannot be equal.
If B contains more elements than C then S(B) > S(C).
If S(A) is minimised for a given n, we shall call it an optimum special sum set. The first five optimum special sum sets are given below.

n = 1: {1}
n = 2: {1, 2}
n = 3: {2, 3, 4}
n = 4: {3, 5, 6, 7}
n = 5: {6, 9, 11, 12, 13}

It seems that for a given optimum set, A = {a1, a2, ... , an}, the next optimum set is of the form B = {b, a1+b, a2+b, ... ,an+b}, where b is the "middle" element on the previous row.

By applying this "rule" we would expect the optimum set for n = 6 to be A = {11, 17, 20, 22, 23, 24}, with S(A) = 117. However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. The optimum set for n = 6 is A = {11, 18, 19, 20, 22, 25}, with S(A) = 115 and corresponding set string: 111819202225.

Given that A is an optimum special sum set for n = 7, find its set string.

NOTE: This problem is related to Problem 105 and Problem 106.

*/

'use strict';

const l = console.log;

function considerSet(set, choices, targetSize) {
    if (choices.length + set.length < targetSize) {
        // We included insufficient choices in this path to make it to the finish!
        return { sum: Number.MAX_VALUE };
    }
    // l('considerSet', set, choices);
    if (hasEqualSubsets(set)) {
        // Solution is not valid
        return { sum: Number.MAX_VALUE };
    }

    if (set.length === targetSize) {
        const sum = set.reduce((acc, curr) => acc + curr, 0);
        return { sum, set };
    }

    if (!choices.length) {
        // Nothing left to try in this path!
        return { sum: Number.MAX_VALUE };
    }

    const [head, ...tail] = choices;

    const incl = considerSet([...set, head], tail, targetSize);
    const excl = considerSet(set, tail, targetSize);

    if (incl.sum < excl.sum) {
        return incl;
    } else {
        return excl;
    }
}

function hasEqualSubsets(set) {
    const subsets = set.reduce(
        (acc, curr) => acc.concat(acc.map((sett) => [curr, ...sett])),
        [[]]
    );

    // Remove empty set
    subsets.shift();

    const sumsMap = subsets.reduce((all, subs) => {
        if (!all) {
            return null;
        }
        const s = subs.reduce((acc, curr) => acc + curr, 0);
        if (all[s]) {
            return null;
        }
        all[s] = subs;
        return all;
    }, {});

    if (!sumsMap) {
        return true;
    }

    if (sumsMap.length && sumsMap.length !== subsets.length) {
        return true;
    }
    // [sum]=
    let minLengths = {};
    for (const [sum, set] of Object.entries(sumsMap)) {
        if (!minLengths[sum]) {
            minLengths[sum] = set.length;
            for (let k = sum - 1; k > 0; k--) {
                if (minLengths[k] > set.length) {
                    return true;
                }
            }
        }
    }

    return false;
}

// l(hasEqualSubsets([1, 2, 3, 4]));
// l(hasEqualSubsets([1, 2, 4, 8]));
// l(hasEqualSubsets([2, 3, 5]));
// l(hasEqualSubsets([3, 4, 5, 6, 8]));
// l(hasEqualSubsets([3, 5, 6, 7]));
// SOLUTION: 20313839404245
const elements = Array.from({length: 26}, (x, i) => i + 19);

// const elements = [1, 2, 3, 4, 5,6,7,8,9];
const r = considerSet([], elements, 7);
l(r);

// 11, 18, 19, 20, 22, 25
