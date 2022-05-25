function confirmTheEnd(str:string,target:string):string|boolean{
    if (str.substring(str.length-target.length)!== target){
        return false;
    }else{
        return true;
    }
    return str;
}

console.log(confirmTheEnd("hellllo","llo"));