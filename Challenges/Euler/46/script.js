/**
 It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

 9 = 7 + 2×12
 15 = 7 + 2×22
 21 = 3 + 2×32
 25 = 7 + 2×32
 27 = 19 + 2×22
 33 = 31 + 2×12

 It turns out that the conjecture was false.

 What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
 */
'use strict';

// 9, 15, 21,25,27,33,35 are all odd composite numbers.

const l = console.log;
const nrSorter = (a,b) => a-b;

function calcDoubledSquares(maxBase, maxExp) {
    const doubledSquares = new Set();

    for (let i = 0; i < maxBase; i++) {
        for (let j = 0; j < maxExp; j++) {
            const ds = i ** j;
            doubledSquares.add(ds * 2);
        }
    }
    return Array.from(doubledSquares).sort(nrSorter);
}

const doubledSquares = calcDoubledSquares(5000, 5);
const primes = calcPrimes(20000);
const oddComps = calcOddComposites(primes);

l(doubledSquares, primes, oddComps);

l('begin!');
for (let oddComp of oddComps) {
    if (!isSumOfPrimeAndDoubleSquare(oddComp)) {
        l(oddComp);
    }

}

function isSumOfPrimeAndDoubleSquare(nr) {
    const doubledSquaresCand = doubledSquares.filter(i => i< nr);
    const primesCand = primes.filter(i => i< nr);
    for (let ds of doubledSquaresCand) {
        for (let p of primesCand) {
            if (ds + p === nr) {
                return true;
            }
        }
    }
    debugger;
    return false;
}

function isPrime(n) {
    let i = 2;
    while (i < n) {
        if (n % i === 0) {
            return false;
        }
        i += 1;
    }
    return n >= 2;
}

function calcPrimes(n) {
    let i = 1;
    const primes = new Set();
    while (i < n) {
        if (isPrime(i)) {
            primes.add(i);
        }
        i += 1;
    }
    return Array.from(primes).sort(nrSorter);
}

function calcOddComposites(primes) {
    const oddComps = new Set();
    for (let i = 0; i < primes.length; i++) {
        for (let j = 0; j <= i; j++) {
            let comp = primes[i] * primes[j];
            if (comp %2===1) {
                oddComps.add(comp);
            }
        }
    }
    return Array.from(oddComps).sort(nrSorter);
}

l('done');
