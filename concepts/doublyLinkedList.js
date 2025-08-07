class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }


insertAtEnd(data){
    //create a new node object
    const newNode=new Node(data);

    //if the linked list is empty and there is no head and tail assigned,assign them to the new node
    if(!this.head){
        this.head=this.tail=newNode;
    }
    else{
        //assign the current tail.next to the new node
        this.tail.next=newNode;
        //assign the newNode prev to the this.tail
        newNode.prev=this.tail;
        this.tail=newNode;

    }
}


insertAtBeggining(data){
    const newNode=new Node(data);

    if(!this.head){
        this.head=this.tail=newNode;
    }
    else{
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
    }
}


deleteNode(value){
    if(!this.head) return;


    let current=this.head;

    while(current){
        if(current.data===value){
            if(current.prev){
                current.prev.next=current.next;
            }
            else{
                this.head=current.next;
            }

            if(current.next){
                current.next.prev=current.prev;
            }
            else{
                this.tail=current.prev;
            }
            return;
        }
        current=current.next;
    }
}



traverseForward(){
    let current=this.head;
    while(current){
        console.log(current.data);
        current=current.next; //traverse to the next node
    }


}


traverseBackward(){
    let current=this.tail;
    while(current){
        console.log(current.data);
        current=current.prev; //traverse/move to the prev node
    }
}

}


// Example usage
const dll = new DoublyLinkedList();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtBeggining(5);
dll.insertAtEnd(30);

console.log("Forward:");
dll.traverseForward();

console.log("Backward:");
dll.traverseBackward();

dll.deleteNode(20);
console.log("After deletion:");
dll.traverseForward();