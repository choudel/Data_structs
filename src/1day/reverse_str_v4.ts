function reverse_str_v4(str:string):string{
    return str.split('').reverse().join('');
}
let word_7: string = "never say never";
let word_8: string = "shams";
console.log(`& ${word_7} => & ${reverse_str_v4(word_7)}`);
console.log(`& ${word_8} => & ${reverse_str_v4(word_8)}`);