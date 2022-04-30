function findLongest(str:string):number{
    let array:string[]=str.split(' ');
    let biggest:number=0
    for (let i=0;i<array.length;i++){
        
        if (array[i].length>biggest){
            biggest=array[i+1].length
        }
    }
    return biggest
}
let phrase_one_1 = "hello man how are you doing beautiful people";
console.log(`longest word has :${findLongest(phrase_one_1)}`);
