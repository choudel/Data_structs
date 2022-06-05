 import LinkedListNode from "./Linked_list_node";
 
 interface List <T>{
     head: LinkedListNode<T>
     tail: LinkedListNode<T>
     size: number
 }
 interface CompareFunction<T>{
     (a:T , b:T):number
 }
 interface EqualsFunction<T> {
    (a: T, b: T): boolean
  }

 const defaultEquals=<T>(a:T,b:T):boolean=>{
     return a === b
 }
 class LinkedList<T> implements Iterable<T>{
     private list: List<T>|undefined
     constructor(){
         this.list=undefined
     }
     [Symbol.iterator](): Iterator<T, any, undefined> {
         throw new Error("Method not implemented.");
     }
     
     size():number{
         if (this.list) return this.list.size
         return 0
     }
     isEmpty():boolean{
         return !this.list
     }
     addFront(val:T):void{
         const NewNode = new LinkedListNode(val)
         if (this.list){
             this.list.head.prev=NewNode
             NewNode.next=this.list.head
             this.list.head=NewNode
             this.list.size += 1
         }else{
             this.list={
                 head: NewNode,
                 tail: NewNode,
                 size: 1,
             }
         }

     }
     addBack(val:T):void{
         const NewNode = new LinkedListNode(val)
         if (this.list){
             this.list.tail.next=NewNode
             NewNode.prev=this.list.tail
             this.list.tail=NewNode
             this.list.size += 1
         }else{
            this.list={
                head: NewNode,
                tail: NewNode,
                size: 1,
            }
         }
    }
    addAt(i:number, val:T):void{
        if (i===0){
            this.addFront(val)
            return
        }
        if(i==this.size()){
            this.addBack(val)
        }
        if (i<0 ||i>= this.size()||!this.list){
            throw new Error('not permitted')
        }
        let current = this.list.head
        for (let j=0; j<i-1;j++){
            current= current.next!
        }
        const NewNode= new LinkedListNode(val)
        current.next!.prev=NewNode
        NewNode.next=current.next
        NewNode.prev=current
        current.next=NewNode
        this.list.size += 1 
    }
    peekFront():T{
        if (!this.list) throw new Error('empty field')
        return this.list.head.val
    }
    peekBack():T{
        if (!this.list) throw new Error('empty field')
        return this.list.tail.val
    }

    get (i:number):T{
        if (i<0 ||i>= this.size()||!this.list){
            throw new Error('not permitted')
        }
        let current = this.list.head
        for (let j=0;j<i-1;j++){
            current=current.next!
        }
        return current.val
    }
    indexOf(value:T, equalsFunction?:EqualsFunction<T>):number{
        if (!this.list) return -1
        const equalsF = equalsFunction || defaultEquals

        let i=0
        let current = this.list.head
        while(!equalsF(current.val,value)){
            current=current.next!
            i += 1

        }

        return i
    }
    removeFront():T{
        if (!this.list) throw new Error("empty list")
        const val = this.list.head.val
        if (this.list.head.next){
            this.list.head.next.prev=null
            this.list.head = this.list.head.next
            this.list.size -=1
        }
        else{
            this.list = undefined
        }
        return val
    }
    removeback():T{
        if (!this.list) throw new Error("empty list")
        const val = this.list.tail.val
        if (this.list.tail.prev){
            this.list.tail.prev.next=null
            this.list.tail = this.list.tail.prev
            this.list.size -=1
        }
        else{
            this.list = undefined
        }
        return val
    }
 }


 const listi= new LinkedList<string>();
 listi.addFront("hello")
 listi.addBack("happy dad")
 listi.addBack("lo siento")
 listi.addFront("encore hello")
 console.log(listi.indexOf("lo siento"))

 listi.addBack("happy dad")
 console.log(listi.size())
 listi.removeFront()
 console.log(listi.size())
 listi.addBack("happy dad")
 console.log(listi)