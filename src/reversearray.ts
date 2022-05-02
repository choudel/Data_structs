function reverse(array:string[]):string[]{
    let length:number=array.length;
    let middle:number=length/2;
    for(let i=0;i<=middle;i++ ){
        let temp =array[i];
        array[i]= array[length-i-1]
        array[length-i-1]=temp
    }
    return array
}

let tree =['A','c', 'b','p','O']
console.log(tree)
reverse(tree)
console.log(tree)
