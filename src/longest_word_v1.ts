function findLongestWord(str: String): number {
  let words: string[] = str.split(" ");
  let maxLength: number = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

let phrase_one = "hello man how are you doing beautiful people";
console.log(`longest word has :${findLongestWord(phrase_one)}`);
