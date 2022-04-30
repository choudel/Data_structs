function min_val(array: number[]): number {
  let minindex: number = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[minindex] > array[i + 1]) {
      minindex = i + 1;
    }
  }
  let minVal = array[minindex];
  return minVal;
}
let test_1: number[] = [96, 45, 3, 75, 10, 78];
console.log(`The min value is: ${min_val(test_1)}`);
