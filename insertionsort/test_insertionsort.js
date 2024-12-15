import {
  insertionSortShift,
  insertionSortSwap,
  getShiftIterations,
  getSwapIterations,
} from "./insertionsort.js";

let list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

console.log("(Shift) List before sort:", list);
console.log("(Shift) List returned from sort:", insertionSortShift(list));
console.log("(Shift) List after sort:(should also be sorted):", list);
console.log("(Shift) iterations:", getShiftIterations());

list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];

console.log("(Swap) List before sort:", list);
console.log("(Swap) List returned from sort:", insertionSortSwap(list));
console.log("(Swap) List after sort:(should also be sorted):", list);
console.log("(Swap) iterations:", getSwapIterations());
