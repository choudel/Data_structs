function longest_word_v2(str:string):number{
    return str.split(' ').reduce(function(x , y){
        return Math.max(x,y.length)
    },0)
}
let phrase_two = "hello man how are you doing beautiful people";
console.log(`longest word has :${longest_word_v2(phrase_two)}`);
