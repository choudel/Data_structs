function reverse_str_v3(str:string):string{
    let reversedStr="";
    let array:string[]=str.split("");
    for ( let i =array.length-1;i>0;i--){
        reversedStr+=array[i]
    }
    return reversedStr
}
let word_5: string = "salutations from mars";
let word_6: string = "carpe diem";
console.log(`& ${word_5} => & ${reverse_str_v3(word_5)}`);
console.log(`& ${word_6} => & ${reverse_str_v3(word_6)}`);
