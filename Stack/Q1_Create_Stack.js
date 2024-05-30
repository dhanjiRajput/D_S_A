class Stack {

    constructor(size) {
        this.items = new Array(size);
        this.index = -1;
        this.size = size;
    }

    push(item) {
        this.index++;
        if (this.index < this.size) {
            this.items[this.index] = item;
        } else {
            console.log("Stack Overflow......!");
        }
    }

    pop(){
        if(this.index != -1){
            this.items[this.index--]=-1;
        }else{
            console.log("Nothing to POP");
        }
    }

    peak(){
        if(this.index !=-1){
            let val=this.items[this.index];
            return val;
        }
    }

    lenght(){
        return this.index+1;
    }

    isEmpty(){
        if(this.index==-1){
            return true;
        }else{
            return false;
        }
    }
};

let stk = new Stack(5);

stk.push(1);

console.log(stk.lenght());