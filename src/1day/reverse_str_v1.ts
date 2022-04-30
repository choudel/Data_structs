function reverse_str_v1(str: string): string {
  let array: string[] = str.split("");
  array.reverse();
  return array.join("");
}

let word_3: string = "Samuel";
let word_4: string = "beast";
console.log(`& ${word_3} => & ${reverse_str_v1(word_3)}`);
console.log(`& ${word_4} => & ${reverse_str_v1(word_4)}`);
