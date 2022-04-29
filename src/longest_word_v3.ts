function longest_word_v3(str: string): number {
  let array: string[] = str.split(" ");
  if (array.length === 1) {
    return array[0].length;
  }
  if (array[0].length >= array[1].length) {
    array.splice(1, 1);
    return longest_word_v3(array.join(" "));
  }
  if (array[0].length <= array[1].length) {
    return longest_word_v3(array.slice(1, array.length).join(" "));
  }
  return array.length;
}
let phrase_three = "hello man how are you doing beautiful people";
console.log(`longest word has :${longest_word_v3(phrase_three)}`);

