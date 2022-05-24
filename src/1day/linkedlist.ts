class Nodes <T> {
    public Data: T | null;
    public Next: Nodes <T> | null;

    public constructor(Data:T|null=null){
        this.Data=Data;
        this.Next=null;
    }
}
class LinkedLists <T>{
    private Head: Nodes <T>;
    private Tail: Nodes <T>;
    constructor(){
        this.Head = new Nodes<T>();
        this.Tail = new Nodes<T>();
        this.Head.Next=this.Tail;
    }
    public isEmpty(): boolean{
        return this.Head.Next === this.Tail;
    }
    public insertFirst(Data: T): void {

        const newNode = new Nodes <T> (Data);
        if (this.isEmpty()) {
            this.Tail=newNode
        }else{
            newNode.Next = this.Head.Next;
            this.Head.Next = newNode;
        }
        
    }
}
let silsila:LinkedLists<string> = new LinkedLists();
silsila.insertFirst("plex")
silsila.insertFirst("sds")
silsila.insertFirst("can")
silsila.insertFirst("pixo")
console.log(silsila);