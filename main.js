const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maçã", "abacate", "abacaxi"];

const squareArr = arr.map(function (item) {
  return item * item;
  // return item * 10;
  // return item + 2;
  // return item - 2;
});

const fruitPosition = cesta.map(function (item, index) {
  return `O/A ${item} está na posição ${index} do array`;
});

// console.log(squareArr);
// console.log(fruitPosition);

const sum = arr.reduce(function (total, next) {
  return total + next;
  // return total - next;
  // return total + 2;
});

// console.log(sum);

const filter = arr.filter(function (item) {
  return item % 2 === 0;
  // return item % 2 === 1;
  // return item > 3;
  // return item === 2;
});

const filter2 = cesta.filter(function (item) {
  return item === "banana";
});

// console.log(filter);
// console.log(filter2);

const find = arr.find(function (item) {
  // return item === 4;
  // return item === 8;
  return item > 4; // retorna o primeiro valor encontrado
});
const fruta = cesta.find(function (item) {
  return item === "abacate";
  // return item === "laranja";
  // return item === "abacaxi";
});

console.log(find);
console.log(fruta);
