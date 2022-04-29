class SelectSort {
  static sort(arrays: number[]) {
    let len: number = arrays.length - 1;
    let currentIndex: number = 0;
    for (let i = 0; i < len; i++) {
      currentIndex = i;
      let currentMin: number = arrays[i];
      for (let j = i; j < len; j++) {
        if (currentMin > arrays[j + 1]) {
          currentMin = arrays[j + 1];
          currentIndex = j+1;
        }
      }
      if (currentIndex !=i) {
        let temp: number = arrays[i];
        arrays[i] = arrays[currentIndex];
        arrays[currentIndex] = temp;
      }
    }
  }
}
let test3: number[] = [25, 96, 87, 47, 69, 7, 64];
console.log(`before: [ ${test3} ] =>`);
SelectSort.sort(test3);
console.log(`after_: [ ${test3} ]`);
