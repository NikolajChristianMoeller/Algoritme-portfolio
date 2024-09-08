export default async function binarySearch(searchTerm) {
    const {min, max} = await getSizes();
    let start = min;
    let end = max;
    let iterations = 0;

    const startTime = performance.now();

    while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    iterations++;

    try {
      const entry = await getEntryAt(middle);

      const comparison = searchTerm.localeCompare(entry.inflected);

      if (comparison === 0) {
        const endTime = performance.now();
        displayResult(entry, iterations, endTime - startTime);
        return;
      } else if (comparison < 0) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } catch (error) {
      console.error(error.message);
      break;
    }
  }

  const endTime = performance.now();
  displayResult(null, iterations, endTime - startTime);
}
