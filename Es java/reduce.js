const numbers = [5,6,8,7,42,6,8,];

const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total)

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum)