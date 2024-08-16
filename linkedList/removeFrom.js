function removeFrom(head, index){
    if(!!head){
        if(index == 0){
            head = head.next;
        }
        else{
            let prev = null;
            let curr = head;
            while(index >0){
                prev = curr;
                curr = curr.next;
                index--;
            }
            prev.next = curr.next
        }
        return head;
    }
    else{
        console.log('head is null')
    }
}