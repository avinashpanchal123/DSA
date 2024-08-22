class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class doublyLL{
    constructor(){
        this.head = null;
    }

    addStart(node) {
        if(this.head == null){
            this.head = node
        }
        else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    addEnd(node){
        if(this.head == null){
            this.head = node
        }
        else{
            let curr = this.head;
    
            while(!!curr.next){
                curr = curr.next
            }
            node.prev = curr;
            curr.next = node;
        }
    }
}