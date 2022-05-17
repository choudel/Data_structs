
class Node<T>{
  next: T|null;
  data: T;
    constructor(data:T,next: Node<T>|null){
        this.data=data;
        this.next=null;
    }
    getData(){
        return this.data;
    }
}

class LinkedList <T> {
    head:Node<T> | null=null;
    tail:Node<T> | null=null;
    init():T{
        this.head = new Node("sanFrancisco",null);
        var nodeOran =new Node("oran",null);
        this.next= nodeOran;
        var nodeChlef = new Node("chlef",null);
        nodeOran.next= nodeChlef;
        this.tail = new Node("alger",null);
        nodeChlef.next=this.tail;

        return this.head;
    }
    print(node:Node<T>):void{
        var p =node;
        while(p!=null){
            var data=p.getData();
            console.log(data + '=>');
            p=p.next;
        }

    }
}
var linkedList= new LinkedList();
var head: LinkedList<string> = linkedList.init();
linkedList.print(head);
