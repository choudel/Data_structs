function Maxvals(array:number[]):number{
    let maxval:number=0
    for (let i=0;i <= array.length-1;i++){
if(maxval<array[i])
maxval=array[i]
    }
    return maxval
}
let hatha=[2,6996,8544,85556,96688,9665477,511,29668]
console.log(Maxvals(hatha))