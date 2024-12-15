let shiftIterations = 0;
/**
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
export function insertionSortShift(arr) {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    if (arr[i] >= arr[i - 1]) {
      continue;
    }
    let j = i;
    while (arr[j - 1] > cur && j > 0) {
      shiftIterations++;
      arr[j] = arr[--j];
    }
    arr[j] = cur;
  }

  return arr;
}

let swapIterations = 0;
/**
 *
 * @param {any[]} arr
 * @returns {any[]}
 */
export function insertionSortSwap(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swapIterations++;
      const tmp = arr[j];
      arr[j] = arr[--j];
      arr[j] = tmp;
    }
  }
  return arr;
}

export function getShiftIterations() {
  return shiftIterations;
}

export function getSwapIterations() {
  return swapIterations;
}
