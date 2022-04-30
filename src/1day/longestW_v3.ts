function findLongestV3(str:string):number{
    let array:string[]=str.split(' ');
    if (array.length===1){
        return array[0].length
    }
    if (array[0].length >= array[1].length){
        array.splice(1,1)
        return findLongestV3( array.join(' '))
    }
    if (array[0].length <= array[1].length){
        return findLongestV3( array.slice(1,array.length).join(' '))
    }
    return array[0].length
}
let phrase_three_1 = "hello man how are you doing beautiful people";
console.log(`longest word has :${findLongestV3(phrase_three_1)}`);