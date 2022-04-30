class Bubble_sort {
  static sort(array: number[]): number[] {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j+1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
}
let test01: number[] = [25, 96, 87, 47, 69, 7, 64];
console.log(`before: [ ${test01} ] =>`);
Bubble_sort.sort(test01);
console.log(`after_: [ ${test01} ]`);
