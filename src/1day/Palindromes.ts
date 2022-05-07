function palindromes(str: string): boolean {
  let front = 0;
  let back = str.length - 1;
  while (front < back) {
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    if (str[front].toLowerCase() !== str[back].toLocaleLowerCase()) {
      return false;
    }
    front++;
    back--;
  }
  return true;
}

let s1 ="small"
let s2 ="POP"
console.log(s1,s2);
console.log(palindromes(s1),palindromes(s2));