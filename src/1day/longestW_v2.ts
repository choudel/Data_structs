function findLongestV2(str:string):number{
    return str.split(' ').reduce(function(x,y){return Math.max(x,y.length)},0)
}
let phrase_two_1 = "hello man how are you doing beautiful people";
console.log(`longest word has :${findLongestV2(phrase_two_1)}`);
