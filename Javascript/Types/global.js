Array.prototype.addOne = function () {
    return this.map(function (el) { return el + 1; });
};
console.log('Start.');
var myarr1234 = [0, 2, 5, 7];
console.log(myarr1234.addOne());
