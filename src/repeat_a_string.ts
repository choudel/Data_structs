function repeatString(str:string,num:number):string{
    if (num > 0){
        return str.repeat(num)
    }else{return "non valid";}
    
}

console.log(repeatString("candy apple", -1))
console.log(repeatString("choudel choudel",15))