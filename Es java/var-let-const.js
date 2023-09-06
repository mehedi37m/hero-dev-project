const numbers = [2, 2, 5, 4, 5, 7, 75, 5];

function doubles(num) {
  console.log("now", num);
  return num * 2;
}

const results = numbers.map(doubles);
console.log(results);

const addNumber = numbers.map((n) => n + 10);
console.log(addNumber);


const final = numbers.forEach(n => console.log(n))

const hello = numbers.filter(n => n > 100)

const oneNumber = numbers.find(n => n > 0)



 