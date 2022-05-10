function mini(array:number[]):number{
    let minival:number=0
    for(let i=0;i<=array.length-1;i++){
        let minvalindex:number=i
        minival=array[i]
        for(let j=i; j<=array.length-1;j++){
            if (array[minvalindex]<minival){
                minival=array[minvalindex]
            }
        }

    }
    return minival
}
let beta =[64744,55664,3646,16416,46748,6464]
console.log(mini(beta))