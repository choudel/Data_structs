import { type } from "os"

class node<T> {
    next: node<T>|undefined
    prev: node<T>|undefined
    val: T
    constructor(val:T){
        this.val=val
        this.next=undefined
        this.prev=undefined
    }
}
class LinkedListi<T>{

    head: node<T>|undefined;
    tail: node<T>|undefined;
    constructor(){
        this.head=undefined
        this.tail=undefined
        
    }
    addToFront(val:T){
        let newnode= new node<T>(val)
        if (this.head==undefined){
            this.head = newnode
            this.tail = newnode
        }else{
            this.head.prev=newnode
            newnode.next=this.head
            this.head=newnode

        }     
                    
    }

}

const silsila = new LinkedListi<string>()
silsila.addToFront('third')
silsila.addToFront('second')
silsila.addToFront('first')

console.log(silsila);