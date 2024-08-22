class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addStart(data) {
        let node = new Node(data);
        node.next = head;
        this.head = node;
    }

    addEnd(data) {
        let node = new Node(data);
        let curr = this.head;
        if (curr == null) {
            this.head = node
        }
        else {
            while (!!curr && !!curr.next) {
                curr = curr.next
            }
            curr.next = node;
        }
    }
}

let list = new LinkedList;

list.addEnd(1)
list.addEnd(2)
list.addEnd(3)
list.addEnd(4)
list.addEnd(5)

console.log(list)






