class Stack{

//initialize stack
constructor(stack){
    this.stack=[];
}

//push an item to the top of the stack
push(item){
this.stack.push(item);
}


//remove and return the top element
pop(x){
  //if stack is empty
  if(this.isEmpty())
  return "stack is empty" 
  else{
    //remove the element and return the last element
     return this.stack.pop();

  }
}


peek(){
    //if stack is empty
    if(this.isEmpty){
      return "stack is empty" 
    }
    else{
        return this.stack[this.stack.length-1];
    }
}


//check if the stack is empty
isEmpty(){
    if(this.stack.length==0){
        return "stack has 0 elements"
    }
}


size(){
    return this.stack.length;
}



//print stack contents
print(){
    console.log(this.stack.join("->"))
}



















}




//example usage
const myStack=new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

myStack.print();


console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.size());