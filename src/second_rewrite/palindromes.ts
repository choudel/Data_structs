function palin(str:string):boolean{
    let front = 0;
    let back = str.length-1
    while (back>front){
        let arr =str.split('')
        if(arr[front].toLocaleLowerCase()!==arr[back].toLocaleLowerCase()){return false}
        front++
        back--
    }
    return true;
}

let pom ="lolilol"
let del = "poP"
console.log (palin(pom),palin(del))
