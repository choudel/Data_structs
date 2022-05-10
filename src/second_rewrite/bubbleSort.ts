class BubbleSortV3 {
  static sort(array: number[]): number[] {
    for (let j = 0; j <= array.length-1; j++) {
        
        for (let i = 0; i <= array.length -j- 1; i++) {
            if(array[i]>array[i+1]){
                let temp = array[i]
                array[i]=array[i+1]
                array[i+1]=temp
            }
        };
       
    }
    return array;
  }
}

let alpha= [10,6,8,2,4,9,7,5,55,6]
BubbleSortV3.sort(alpha)
console.log(alpha)