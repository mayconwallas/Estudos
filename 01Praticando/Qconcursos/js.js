function f(f) {return (f*f);}

let value1 = f;
console.log(value1);

let value2 = f(100);
console.log(value2);

let value3 = f;
console.log(value3(100));

console.log(4 & 1);
console.log(7 | 2)
console.log(~ -5)
console.log(9 >> 2)
console.log(9 >>> 1)