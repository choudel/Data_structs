 import LinkedListNode from "./Linked_list_node";
 
 interface List <T>{
     head: LinkedListNode<T>
     tail: LinkedListNode<T>
     size: number
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
 }


 const listi= new LinkedList<string>();
 listi.addFront("hello")
 listi.addFront("encore hello")
 console.log(listi.size())
 console.log(listi)