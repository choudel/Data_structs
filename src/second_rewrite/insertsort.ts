class insertsorty{
    static sort(arr:number[]):number[]{
        for (let i=0;i<=arr.length-1;i++){
            let currentMin=arr[i]
            
            if(arr[i]>arr[i+1]){
                currentMin=arr[i+1]
                
            }
            for(let j=i;j>0;j--){
                if(arr[j]>currentMin){
                    arr[j+1] = arr[j];
                    arr[j] = currentMin
                }
            }
        }
        return arr;
    }
}

let p1=[3,95,68,1285,69,26,216,26,99,77,99,56]
insertsorty.sort(p1)
console.log(p1)