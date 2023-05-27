// function find(array, element) {
//   return array.map((w, i) => (w === element ? i : "Not Found"));
// }

// function find(array, element) {
//   return array.indexOf(element) >= 0 ? array.indexOf(element) : "Not found";
// }

let i;
const find=(a,e)=>(i=a.indexOf(e))>=0?i:'Not found'

let arr = [2, 3, 5, 7, 11];
let elem = 11;

console.log(find(arr, elem));
