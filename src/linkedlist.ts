
class Node<T> {
    public item: T | null;
    public next: Node<T> | null;

    public constructor(item: T | null = null) {
        this.item = item;
        this.next = null;
    }
}
class LinkedList<T> {
    private head: Node<T>|null;
    private tail: Node<T>|null;

    constructor() {
        this.head = null;
        this.tail = null;
    }
    public isEmpty(): boolean {
        if(!this.head&&!this.tail){return true}
        return false
    }
    public insertFirst(item: T): void {
        const newNode = new Node<T>(item);
        if (this.isEmpty()) {
            this.head=newNode
            this.tail=newNode
            this.head.next=this.tail
        }
            else{
                newNode.next=this.head
                this.head=newNode
        
    }}
}
const linked=new LinkedList();
linked.insertFirst("larry");
linked.insertFirst(5);
linked.insertFirst("pony");
console.log(linked)