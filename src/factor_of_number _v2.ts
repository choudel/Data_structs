function factorializeV2(num: number): number {
  if (num === 0) {
    return 1;
  }
  return num * factorializeV2(num - 1);
}
console.log(factorializeV2(5));
console.log(factorializeV2(10));
console.log(factorializeV2(20));
console.log(factorializeV2(0));
