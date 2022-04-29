function reverse_string_v2(str: string): string {
  let newStr: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

let word3: string = "choudel";
let word4: string = "salam alikoum";
console.log(`& ${word3} => & ${reverse_string_v2(word3)}`);
console.log(`& ${word4} => & ${reverse_string_v2(word4)}`);
