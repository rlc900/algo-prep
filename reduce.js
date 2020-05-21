const numbers = [
  {num: 20},
  {num: 500},
  {num: 6}
];

let total = numbers.reduce((acc, currentNum) => {
  return acc + currentNum.num
}, 0);

console.log(total);
