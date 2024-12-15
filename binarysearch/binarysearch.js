const numbers = [1, 3, 5, 7, 9, 11];
const index = binarySearch(7, numbers);
console.log(index);

const words = ["apple", "banana", "cherry", "date"];
const wordIndex = binarySearch("cherry", words);
console.log(wordIndex);

function binarySearch(search, values, compareFunc) {
  if (!compareFunc) {
    compareFunc = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a - b;
      } else if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
      } else {
        throw new Error("Unsupported types for comparison.");
      }
    };
  }

  let start = 0;
  let end = values.length - 1;
  let iterations = 0;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    iterations++;

    const comparison = compareFunc(search, values[middle]);

    if (comparison === 0) {
      console.log(`Iterations: ${iterations}`);
      return middle;
    } else if (comparison < 0) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  console.log(`Iterations: ${iterations}`);
  return -1;
}
