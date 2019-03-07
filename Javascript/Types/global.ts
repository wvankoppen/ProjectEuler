
interface Array<T> {
    addOne(): T
}

Array.prototype.addOne = function (this: Array<number>): Array<number> {
    return this.map(el=>el + 1);
}

console.log('Start.');

let myarr123 = [0, 2, 5, 7];
console.log(myarr123.addOne());
