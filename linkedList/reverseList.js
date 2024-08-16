function reverserList(head){
    let prev = null;
    let curr = head;
    let next = null;
    while(!!curr && !!curr.next){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    console.log(prev, 'prev+++++++')
}

reverserList(list.head);