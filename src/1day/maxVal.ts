function max_val(array: number[]): number {
  let maxVal: number = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (maxVal < array[i + 1]) {
      maxVal = array[i + 1];
    }
  }
  return maxVal;
}
let scores01: number[] = [69, 91, 31, 54, 78, 1];
console.log(`The maximum value is : ${max_val(scores01)}`);
