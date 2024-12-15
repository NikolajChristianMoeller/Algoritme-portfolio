/**
 * Merge Sort:
 * 1. Hvis et array kun indeholder et enkelt element - eller er helt tomt - så er det allerede sorteret, og skal blot returneres uforandret.
 * 2. Ellers skal arrayet splittes i to - nogenlunde lige store - dele.
 * 3. De to dele skal så hver især sorteres - rekursivt med mergeSort
 * 4. De to sorterede dele skal så merges
 * 5. og det samlede, mergede, array returneres
 */
let iterations = 0;
/**
 * Merge sort
 * @param {any[]} arr
 */
export function mergeSort(arr) {
  iterations++;
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

/**
 * @param {any[]} left
 * @param {any[]} right
 */
function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    iterations++;
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }
  return result;
}

export function getIterations() {
  return iterations;
}
