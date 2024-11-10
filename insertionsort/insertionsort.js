const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
console.log("Original array:", list);
const sortedList = insertionSortShift(list);
console.log("Sorted array:", sortedList);

function insertionSortShift(array) {
  let iterationCount = 0;

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    console.group(`Iteration ${i}: key = ${key}`);

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
      iterationCount++;

      console.log(
        `Shifted ${array[j + 1]} from index ${j + 1} to index ${j + 2}`
      );
    }

    array[j + 1] = key;
    iterationCount++;

    console.log(`Inserted key = ${key} at index ${j + 1}`);
    console.groupEnd();
  }

  console.log(`Total iterations: ${iterationCount}`);
  return array;
}

function insertionSortSwap(array) {
  let iterationCount = 0;

  function swap(indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }

  for (let i = 1; i < array.length; i++) {
    console.group(`Iteration ${i}: array = [${array.join(", ")}]`);

    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1);
      console.log(
        `Swapped ${array[j]} and ${array[j - 1]} at indices ${j} and ${j - 1}`
      );
      j--;
      iterationCount++;
    }

    console.groupEnd();
  }

  console.log(`Total iterations: ${iterationCount}`);
  return array;
}
