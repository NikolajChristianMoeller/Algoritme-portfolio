import { mergeSort, getIterations } from "./mergesort.js";
const arr = [5, 3, 7, 7, 8, 6, 2, 9];
console.log("List before sort:", arr);
console.log("List returned from sort:", mergeSort(arr));
console.log("iterations:", getIterations());
