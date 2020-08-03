// A googol (10100) is a massive number: one followed by one-hundred zeros; 100100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

// Considering natural numbers of the form, ab, where a, b < 100, what is the maximum digital sum?

'use strict';


const l = console.log;


// l(calcDigitSum(32));
// l(calcDigitSum(12345));
// l(calcDigitSum(900));
let m=0;  
for (let i=0; i<100; i++) {
	l('i',i);
	for (let j=0; j<100; j++) {
		const huge = BigInt(i) ** BigInt(j);
		const r = calcDigitSum(huge);
		console.log(huge,r);
		if (r > m) {
			m = r;
		}
	}

	
}

l('stop', m);
function calcDigitSum(nr) {
	//debugger;
	let sum = BigInt(0);
	let remainder = BigInt(nr);
	while(remainder> 9) {
		sum+= remainder% BigInt(10);
		remainder = remainder / BigInt(10);
		
	}
	return sum + remainder;
}

l(calcDigitSum(Math.pow(99,99)));

// function pow(nr,exp) {
// 	if (exp ===0) return 1;
// 	let v = BigInt(nr);
// 	for (let i=0;i<exp - 1; i++){
// 		v = v*v;
// 	}
// 	return v;
// }