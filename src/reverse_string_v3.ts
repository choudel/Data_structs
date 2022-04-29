function reverse_string_v3(str: string): string {
  let reversed:string="";
  let array:string[]=str.split("");
  for (let i=array.length-1;i>=0;i--){
    reversed += array[i];
  }
  return reversed
}

let word5: string = "salutations from mars";
let word6: string = "carpe diem";
console.log(`& ${word5} => & ${reverse_string_v3(word5)}`);
console.log(`& ${word6} => & ${reverse_string_v3(word6)}`);
