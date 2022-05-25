function repeatSTR(str:string,num:number):string{
    if (num<0) return "non valid";
    if (num ===1) return str;
    else
        return str+repeatSTR(str,num-1) 
}

console.log(repeatSTR("salut",-1))
console.log(repeatSTR("salut",6))
