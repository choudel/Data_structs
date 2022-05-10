function reverseArr (arr:number[]):number[]{
    let len = arr.length
    let middle = len / 2;
for(let i=0;i<=middle;i++){
    let temp = arr[len-i-1]
    arr[len-i-1]=arr[i]
    arr[i]=temp
}
return arr
}

let pin:number[] =[12,68,1648,146,688,165,8,684464,6]
console.log(reverseArr(pin))