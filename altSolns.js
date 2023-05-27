// function find(array, element) {
//   return array.indexOf(element) !== -1 ? array.indexOf(element) : "Not found";
// }

// let pata = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";

const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x

let arr = [2, 3, 5, 7, 11];
let elem = 21;

console.log(find(arr, elem));
