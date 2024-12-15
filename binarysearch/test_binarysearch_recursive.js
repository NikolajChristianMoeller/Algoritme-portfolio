import {
  binarySearchRecursive as binarySearch,
  getIterations,
  resetIterations,
} from "./binarysearch_recursive.js";

// Test for numbers
const numbers = [1, 2, 3, 4, 5];
const numberToFind = 3;
const numberIndex = binarySearch(numberToFind, numbers, 0, numbers.length - 1);
console.log(
  `Index of ${numberToFind} in numbers:\nFound ${numberIndex} Exptected 2`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();

const numberToFind2 = 6;
const numberIndex2 = binarySearch(
  numberToFind2,
  numbers,
  0,
  numbers.length - 1
);
console.log(
  `Index of ${numberToFind2} in numbers:\nFound ${numberIndex2} expected -1`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();

// Test for strings
const strings = ["apple", "banana", "cherry", "date", "elderberry"];
const stringToFind = "cherry";
const stringIndex = binarySearch(stringToFind, strings, 0, strings.length - 1);
console.log(
  `Index of ${stringToFind} in strings:\nFound ${stringIndex} Exptected 2`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();

const stringToFind2 = "grape";
const stringIndex2 = binarySearch(
  stringToFind2,
  strings,
  0,
  strings.length - 1
);
console.log(
  `Index of ${stringToFind2} in strings:\nFound ${stringIndex2} Exptected -1`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();

const stringToFind3 = "apple";
const stringIndex3 = binarySearch(
  stringToFind3,
  strings,
  0,
  strings.length - 1
);
console.log(
  `Index of ${stringToFind3} in strings:\nFound ${stringIndex3} Exptected 0`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();

// Test for objects
function compareObj(a, b) {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
}
const objects = [
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
];
const objectToFind = { id: 3, name: "Alice" };
const objectIndex = binarySearch(
  objectToFind,
  objects,
  0,
  objects.length - 1,
  compareObj
);
console.log(
  `Index of object with name ${objectToFind.name} in objects:\nFound ${objectIndex} Exptected 0`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();

const objectToFind2 = { id: 5, name: "Charlie" };
const objectIndex2 = binarySearch(
  objectToFind2,
  objects,
  0,
  objects.length - 1,
  compareObj
);
console.log(
  `Index of object with name ${objectToFind2.name} in objects:\nFound ${objectIndex2} Exptected -1`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();

const objectToFind3 = { id: 4, name: "John" };
const objectIndex3 = binarySearch(
  objectToFind3,
  objects,
  0,
  objects.length - 1,
  compareObj
);
console.log(
  `Index of object with name ${objectToFind3.name} in objects:\nFound ${objectIndex3} Exptected 3`
);
console.log("iterations:", getIterations(), "\n");
resetIterations();
