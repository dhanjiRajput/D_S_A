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

    pop() {
        if (this.index != -1) {
            this.items[this.index--] = -1;
        } else {
            console.log("Nothing to POP");
        }
    }

    peak() {
        if (this.index != -1) {
            let val = this.items[this.index];
            return val;
        }
    }

    lenght() {
        return this.index + 1;
    }

    isEmpty() {
        if (this.index == -1) {
            return true;
        } else {
            return false;
        }
    }

    reverse() {
        let arr=[4];
        if (this.index != -1) {
            for(let i=0;i<this.lenght();i++){
                arr[i]=this.items.pop();
            }
        }
        console.log(arr);
    }
};

let stk = new Stack(4);

stk.push("j");
stk.push("a");
stk.push("v");
stk.push("a");

console.log(stk.reverse());
