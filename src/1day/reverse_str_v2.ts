function reverse_str_v2(str:string):string{
let newStr:string="";
for(let i = str.length-1;i>0;i--){
    newStr+=str[i];
}
return newStr
}
let word_9: string = "choudel";
let word_10: string = "salam alikoum";
console.log(`& ${word_9} => & ${reverse_str_v2(word_9)}`);
console.log(`& ${word_10} => & ${reverse_str_v2(word_10)}`);
