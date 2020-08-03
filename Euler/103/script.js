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

// debugger;
function consider (base, choices, size) {
	if (choices.length + base.length < size) {
		return {l:888888888};
	}
	l('consider', base,choices);
	if (hasEqualSubsets(base)){
		return  {l:777777777};
	}
	
	if (base.length === size) return {l: base.reduce((acc,curr) => acc+curr,0),b:base};
	const [head, ...tail] = choices;
	if (!head){return  {l:999999999}}

	

	const with2 = consider([...base, head], tail,size );
	const without = consider(base, tail, size );

	if (with2.l < without.l) {
		return with2;
	}
	else {
		return without;
	}
}

// const elems = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
const elems = [1,2,3,4,5];
function hasEqualSubsets (theArray)
	{ 
		//debugger;
		const subsets = theArray.reduce(
        (acc, curr) => acc.concat(
         acc.map(set => [curr,...set])
        ),
        [[]]
	  );
	  const sumsMap = subsets.reduce((all,subs) => { all[ subs.reduce((acc,curr) => acc+curr,0)] = subs;return all;});
	  console.log(sumsMap);
	if( sumsMap.length !== subsets.length) {
		return true;
	}
	let m = 0;
	for (let s of sumsMap){
		debugger;
		if(m <= s.value.length){
			m = s.value.length;
		}
		else {
			console.log('true', s)
			return true;
		}
	}
	

	return false;
}

l(hasEqualSubsets([1,2,4]));

const r = consider([],elems, 7);
l(r);

// 11, 18, 19, 20, 22, 25