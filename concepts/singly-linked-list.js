//singly linked-list

//node class
class Node{
    constructor(value){
        this.value=value;
        this.next=null;

    }
}
class SinglyLinkedList{

constructor(){
    this.head=null; //set the current head as null since we dont have a head node set at first

}


//insert at head function
 insertAtHead(value){
//create a new node
const newNode=new Node(value);

//set the new node next as the head
newNode.next=this.head;
//set the new node as the head
this.head=newNode;

}

//insert at the tail
insertAtTail(value){

//define a new node object 
const newNode=new Node(value);
//if there is no head, insert at head
if(!this.head){
    this.head=newNode;
    return;
}

//make the current node as the head node
let current=this.head;

//while the current node has a next
while(current.next){
    //go to the next node
    current=current.next;
}

//once we reach the last node,we attach the new node to it
//we make the last node's .next pointer point to the new node
current.next=newNode;






}
  // Delete a node by value
  delete(value) {
    //checks if the list is empty, just exit
    if (!this.head) return;


    //the value to delete is at the header
    if (this.head.value === value) {
        //if the condition returns true, just move the head pointer to the next node
      this.head = this.head.next;
      return;
    }


    //this is just to move to the next node to check
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }


    /*This means: “Skip the node with the target value”

It rewires the pointer, so the node with the given value is no longer linked*/
    if (current.next) {
      current.next = current.next.next;
    }
  }


//search for a value
search(value){
    let current=this.head;

    while(current){
        //if the current value matches the value
        if(current.value===value) return true;
        //go to the next node
        current=current.next;
    }
    //else, return false
    return false;
}


//traverse and print
traverse(){
    let current=this.head;

    const values=[];

    while(current){
        values.push(current.value);
        current=current.next;
    }

    console.log("List: ", values.join("->"))
}



}

const list = new SinglyLinkedList();
list.insertAtHead(10);
list.insertAtHead(5);
list.insertAtTail(20);
list.traverse(); // 5 -> 10 -> 20

console.log("Found 10?", list.search(10)); // true
list.delete(10);
list.traverse(); // 5 -> 20


