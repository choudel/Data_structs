function reverse_string_v1(str:string):string{
    let array:string[]=str.split('');
    array=array.reverse();
    let result:string=array.join('');
    return result;
}

let word1:string ="Samuel";
let word2:string ="beast";
console.log(`& ${word1} => & ${reverse_string_v1(word1)}`);
console.log(`& ${word2} => & ${reverse_string_v1(word2)}`);

