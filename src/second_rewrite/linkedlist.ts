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
class LinkedListi<T> extends node<T>{

    head: LinkedListi<T>|node<T>|undefined
    tail: LinkedListi<T>|node<T>|undefined
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

        }     
            
        
    }

}