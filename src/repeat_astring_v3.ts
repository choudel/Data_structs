function repeat(str:string,num:number):string{
    return num > 0? str.repeat(num):"NONe Valid"
}

console.log(repeat("heelllle",-5))
console.log(repeat("heellll e ",6))