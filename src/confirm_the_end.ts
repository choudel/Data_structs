function confirmEnding(str:string, target:string):boolean{
    return str.substring(str.length - target.length)===target;

}

console.log(confirmEnding("helllo pale","ale"))