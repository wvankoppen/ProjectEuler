console.log('Start.');

type MyNum = number;

type Employee = { name: string, salary: number }

type Employee2 = { [P in keyof Employee] }

let employeeOne: Employee = { name: 'wouter', salary: 3 };
let employeeTwo: Employee2 = { name: 'piet', salary: 4 };


console.log(employeeOne, employeeTwo);