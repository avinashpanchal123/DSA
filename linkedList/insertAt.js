function insertAt(head, node, index){
    if(!!node && index == 0){
        node.next = head;
        head = node
    }else{
        let curr = head
        let prev = null;
        while (index > 0){
            prev = curr
            curr = curr.next;
            index--;
        }
        node.next = curr
        // let temp = curr.next;
        // curr.next = node;
        // curr = curr.next;
        prev.next = node;
    }
    return head
}