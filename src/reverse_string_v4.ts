function reverse_string_v4(str: string): string {
  return str.split("").reverse().join("");
}

let word7: string = "never say never";
let word8: string = "shams";
console.log(`& ${word7} => & ${reverse_string_v4(word7)}`);
console.log(`& ${word8} => & ${reverse_string_v4(word8)}`);
