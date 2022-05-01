class InsertSortV2 {
  static sort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      let insertedNum: number = array[i];
      let loopIndex: number = i;
      for (let j = loopIndex - 1; j >= 0; j--) {
        if (insertedNum < array[j]) {
          array[j + 1] = array[j];
          loopIndex--;
        }
      }
      array[loopIndex] = insertedNum;
    }
  }
}

let numArray = [1, 6, 9, 4, 8, 1, 5, 3, 6, 8, 0];
console.log(numArray);
InsertSortV2.sort(numArray);
console.log(numArray);
