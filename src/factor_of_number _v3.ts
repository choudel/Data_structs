function factorializeV3(num: number): number {
  for (var a: number = 1; num >= 1; num--) {
    a *= num;
  }
  return a;
}
console.log(factorializeV3(5));
console.log(factorializeV3(10));
console.log(factorializeV3(20));
console.log(factorializeV3(0));
