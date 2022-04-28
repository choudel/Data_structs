class BubbleSort {
  static sort(arrays:number[]) {
    for (let i = 0; i < arrays.length - 1; i++) {
      for (let j = 0; j < arrays.length - i - 1; j++) {
        if (arrays[j] > arrays[j + 1]) {
          let flag = arrays[j];
          arrays[j] = arrays[j + 1];
          arrays[j + 1] = flag;
        }
      }
    }
  }
}
let test1: number[] = [25, 96, 87, 47, 69, 7, 64];
console.log(`before: [ ${test1} ] =>`);
BubbleSort.sort(test1);
console.log(`after_: [ ${test1} ]`);
