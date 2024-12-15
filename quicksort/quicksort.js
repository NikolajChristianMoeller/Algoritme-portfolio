let iterations = 0;

/**
 * sorts an array in place using quicksort algorithm, and returns it
 * @param {any[]} arr array to sort
 * @returns {any[]} sorted array
 */
export function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Sorts a "partition of an array" in place, divides it into partitions, then sorts those recursively
 * @param {any[]} arr
 * @param {number} low
 * @param {number} high
 * @returns {any[]}
 */
function _quickSort(arr, low, high) {
  iterations++;
  if (low >= 0 && high >= 0 && low < high) {
    const pivot = partition(arr, low, high);
    _quickSort(arr, low, pivot);
    _quickSort(arr, pivot + 1, high);
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @param {any[]} arr
 */
function swap(i, j, arr) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * Divides an array into partitions and returns the pivot
 * @param {any[]} arr the array to partition
 * @param {number} low the lower bound of partition
 * @param {number} high the upper bound of partition
 * @returns {number} The pivot
 */
function partition(arr, low, high) {
  const pivot = arr[low];
  while (true) {
    // while element to the left of pivot is less than pivot, move right
    while (arr[low] < pivot) {
      iterations++;
      low++;
    }

    // while element to the right of pivot is greater than pivot, move left
    while (arr[high] > pivot) {
      iterations++;
      high--;
    }

    // If the indices crossed, return
    if (low >= high) {
      return high;
    }
    // if we get here, arr[low] >= pivot and arr[high] <= pivot, so we swap them
    swap(low, high, arr);
    low++;
    high--;
  }
}

export function getIterations() {
  return iterations;
}
