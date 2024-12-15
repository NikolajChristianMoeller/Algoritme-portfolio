import { fisherYatesShuffle } from "./shuffle.js";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("List before shuffle:", arr);
console.log("List returned from shuffle:", fisherYatesShuffle(arr));
