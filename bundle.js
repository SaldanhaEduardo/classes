"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ["banana", "maçã", "abacate", "abacaxi"];
var squareArr = arr.map(function (item) {
  return item * item; // return item * 10;
  // return item + 2;
  // return item - 2;
});
var fruitPosition = cesta.map(function (item, index) {
  return "O/A ".concat(item, " est\xE1 na posi\xE7\xE3o ").concat(index, " do array");
}); // console.log(squareArr);
// console.log(fruitPosition);

var sum = arr.reduce(function (total, next) {
  return total + next; // return total - next;
  // return total + 2;
}); // console.log(sum);

var filter = arr.filter(function (item) {
  return item % 2 === 0; // return item % 2 === 1;
  // return item > 3;
  // return item === 2;
});
var filter2 = cesta.filter(function (item) {
  return item === "banana";
}); // console.log(filter);
// console.log(filter2);

var find = arr.find(function (item) {
  // return item === 4;
  // return item === 8;
  return item > 4; // retorna o primeiro valor encontrado
});
var fruta = cesta.find(function (item) {
  return item === "abacate"; // return item === "laranja";
  // return item === "abacaxi";
});
console.log(find);
console.log(fruta);
