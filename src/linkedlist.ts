
class Node<T> {
    public item: T | null;
    public next: Node<T> | null;

    public constructor(item: T | null = null) {
        this.item = item;
        this.next = null;
    }
}
class LinkedList<T> {
    private head: Node<T>;
    private tail: Node<T>;

    constructor() {
        this.head = new Node<T>();
        this.tail = new Node<T>();
        this.head.next = this.tail;
    }
    public isEmpty(): boolean {
        return this.head.next === this.tail;
    }
    public insertFirst(item: T): void {

        const newNode = new Node<T>(item);
        if (this.isEmpty()) {
            this.tail=newNode}else{newNode.next = this.head.next;
                this.head.next = newNode;}
        
    }
}
const linked=new LinkedList();
linked.insertFirst("larry");
linked.insertFirst(5);
linked.insertFirst("pony");
console.log(linked)