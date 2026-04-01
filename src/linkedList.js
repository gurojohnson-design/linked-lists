import { node } from "./node.js";

export class linkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // append(value) end of the list
    append(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }




    // prepend(value) beginning of the list
    prepend(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            newNode.next = current;
            this.head = newNode;
        }
        this.size++
    }




    // size() total length of list
    getSize() {
        return this.size;
    }




    // head() value of first node-- if no node return undefined
    getHead() {
        if (this.head) {
            return this.head.value;
        } else {
            return undefined;
        }
    }



    // tail() value of last node -- if no node return undefined
    tail() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current.value;
        }
    




    // at(index) value of node at that index-- or undefined
    at(index) {
        if (!this.head || index < 0 || index > this.length) {
            return undefined;
        }
        let current = this.head;
        for (let i = 1; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }



    // pop() remove head node and return its value -- or undefined
    pop() {
        if (!this.head) {
            return undefined;
        }
        let headValue = this.head;
        return headValue.value;
    }




    // contains(value) true if list has value -- false if not
    contains(value) {
        if (!this.head) {
            return false;
        }
        let current = this.head;
        while (current.value !== null) {
            if (current.value === value) {
                return true;
            } else current = current.next;
        } return false;
    }




    // findIndex(value) return index of value or (-1) if not in list -- returns first value found
    findIndex(value) {
        if (this.contains(value)) {
            let current = this.head;
            let index = 0;
            while (current.value !== null) {
                if (current.value === value) {
                    return index;
                } else current = current.next;
                index++;                
            } return -1;
        };
    }




    // toString() converts list to string situated as ( value ) -> ( value ) -> ( value ) -> etc
    toString() {
        let current = this.head;
        let result = '';
        while (current.next) {
            result += current.value + '->';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }


}


// node src/index.js