class Select_sort {
  static sort(array: number[]): number[] {
    let len = array.length - 1;
    let currentIndex = 0;
    for (let i = 0; i < len; i++) {
      currentIndex = i;
      let currentMin = array[i];
      for (let j = i; j < len; j++) {
        
        if (currentMin > array[j + 1]) {
          currentMin = array[j + 1];
          currentIndex = j + 1;
        }
      }
      if (currentIndex != i) {
        let temp = array[i];
        array[i] = array[currentIndex];
        array[currentIndex] = temp;
      }
    }
    return array;
  }
}
let test_3: number[] = [25, 96, 87, 47, 69, 7, 64];
console.log(`before: [ ${test_3} ] =>`);
Select_sort.sort(test_3);
console.log(`after_: [ ${test_3} ]`);
