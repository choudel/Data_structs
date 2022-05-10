class selecty{
    static sort(array:number[]):number[]{
        for (let i=0; i<=array.length-1;i++){
            let currentIndex:number=i;
            let currentMinimum:number=array[i];
            for(let j=i; j<=array.length-1;j++){
                if(currentMinimum>array[j+1]){
                    currentMinimum=array[j+1]
                    currentIndex=j+1;   
                }
            }
            if(currentIndex!==i){
                let temp=array[i];
                array[i]=array[currentIndex]
                array[currentIndex]=temp
            }
        }
        return array
    }
}
let pit=[26,669,697,58,987,5411,120,47]
selecty.sort(pit)
console.log(pit)