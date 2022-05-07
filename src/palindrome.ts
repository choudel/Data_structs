function palindrome(str:string):boolean{
    let front =0;
    let back = str.length-1;
    while (back>front){
        while(str[front].match(/[\W_]/)){
            front++;
            continue;
        }
        while(str[back].match(/[\W_]/)){
            back--;
            continue;
        }
        if (str[front].toLocaleLowerCase() !== str[back].toLocaleLowerCase()){return false}
        front++;
        back--;
        
    }
    return true;
}

let f1:string="eye"
let f2:string="lop"
console.log(f1,f2)
console.log(palindrome(f1),palindrome(f2))
