// let i;

function findIndex(arr, elem) {
  return arr.indexOf(elem) >= 0 ? arr.indexOf(elem) : "not found";
}

let array = [5, 6, 7];
// console.log(findIndex([5, 6, 7], 6));

function find(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return "not found";
}

// console.log(find(array, 9));

function biz() {
  let i = 1;
  while (i <= 100) {
    let out = "";
    if (i % 3 == 0) out += "Fizz"

    if (i % 5 === 0) out += "Buzz"

    console.log(out || i);
    i++;
  }
}

console.log(biz());
