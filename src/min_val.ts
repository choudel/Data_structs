function min(arrays: number[]) {
  let minIndex: number = 0;
  for (let j = 1; j < arrays.length; j++) {
    if (arrays[minIndex] > arrays[j]) {
      minIndex = j;
    }
  }
  return arrays[minIndex];
}
let test2: number[] = [96, 45, 3, 75, 10, 78];
console.log(`The min value is: ${min(test2)}`);
