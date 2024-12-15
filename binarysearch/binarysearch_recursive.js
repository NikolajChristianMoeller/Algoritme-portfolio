export function recursiveBinarySearch(
  target,
  list,
  left,
  right,
  attempts = 0,
  comparator
) {
  console.log("Left, right:", left, right);
  attempts++;

  const midpoint = Math.floor((left + right) / 2);

  let result;
  if (comparator) {
    result = comparator(list[midpoint], target);
  } else {
    result = defaultCompare(list[midpoint], target);
  }

  console.log("Comparison result:", result);

  if (result > 0) {
    right = midpoint - 1;
  } else if (result < 0) {
    left = midpoint + 1;
  } else if (result === 0) {
    console.log("Found in attempts:", attempts);
    return { index: midpoint, attempts };
  }
  if (result === undefined || left > right) {
    console.log("Not found");
    return { index: -1, attempts };
  }

  return recursiveBinarySearch(target, list, left, right, attempts, comparator);
}

function defaultCompare(value, target) {
  if (typeof target === "string") {
    return value.localeCompare(target);
  } else if (typeof target === "number") {
    if (value < target) return -1;
    else if (value > target) return 1;
    else if (value === target) return 0;
  } else {
    console.log("Target is neither string nor number");
  }
}
