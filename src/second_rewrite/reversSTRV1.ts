function reverseSTR(str:string):string{
    let arr=str.split('');
    arr.reverse();
    return arr.join("");
}

let tet = "palindrome"
console.log(reverseSTR(tet))
