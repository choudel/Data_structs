// Apply a bubble sort on a linked list






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

const silsila = new LinkedListi<number>()
silsila.addToFront(1)
silsila.addToFront(6)
silsila.addToFront(13)
silsila.addToFront(13)
silsila.addToFront(3)
silsila.addToFront(43)
silsila.addToFront(0)
console.log(silsila);

class BubbleSortV3  {
    linkelist:LinkedListi<T>=new LinkedListi<T>()
    sort(linkedlist: LinkedListi<T>): LinkedListi<T> {
      while (linkedlist.head.next != undefined) {
          
          for (let i = 0; i <= array.length -j- 1; i++) {
              if(array[i]>array[i+1]){
                  let temp = array[i]
                  array[i]=array[i+1]
                  array[i+1]=temp
              }
          };
         
      }
      return array;
    }
  }
  
  let alpha= [10,6,8,2,4,9,7,5,55,6]
  BubbleSortV3.sort(alpha)
  console.log(alpha)