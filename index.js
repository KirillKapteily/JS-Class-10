// function foo (){

// }

// function bar (foo){// Function higher order

// }

function mess(message) {
  console.log(message);
}

function test2(callback) {
  const textTest = "Test message";
  callback(textTest);
}

test2(mess);

// function foo(message){
//     console.log(message);
// }

// function namet(callback){
//     const text = "hello world";
//     callback(text);
// }

// namet(foo);

// const arr = [1, 2, 3, 4, 5];

// let total = 0;
// let ic = 0;
// function sumArray(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     ic = arr[0];
//     ic1 = arr[1];
//     ic2 = arr[2];
//     ic3 = arr[3];
//     ic4 = arr[4];
//   }
//   callback(total);
// }
// function cb(arr, cb) {
//   console.log('+' ,ic, ic1, ic2, ic3, ic4, '=', total);
// }

// sumArray(arr, cb);

//now fillter test
// let massive = [1, 2, 3, 4, 5];

const filter = function (arr, callback) {
  const filteredElements = [];
  for (const element of arr) {
    const passed = callback(element);
    if (passed) {
      filteredElements.push(element);
    }
  }
  return filteredElements;
};

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
console.log(freshFruits);

//nn
const add = function (a, b) {
  return a + b;
};

//simpler function
const add1 = (a, b) => a + b;

console.log(add(5, 3));
console.log(add1(5, 3));

//task 1

const hello2 = (namer = "Василь", text = " привіт!") => namer + text;

console.log(hello2());

//task 2
const myAverageScore = (scores) => {
  let total = 0;
  let score = [100];
  for (let i = 0; i < score.length; i++) {
    total += score[i];
  }

  let avarage = total / score.length;


  // for (element of arr) {

  if (avarage >= 100 && avarage <= 91) {
    return 'A';
  } else if (avarage >= 90 && avarage <= 81) {
    return 'B';
  } else if (avarage >= 80 && avarage <= 71) {
    return 'C';
  } else {
    return 'D';
  }
}
// }

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));