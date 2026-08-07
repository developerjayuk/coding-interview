// Challenge: Reverse a linked list.
// https://leetcode.com/problems/reverse-linked-list/description/

// 1. verify the constraints
// what do we return if we get null or a single node?  

// 2. write out some test cases
//  [1,2,3,4,5] = [5,4,3,2,1]


// 3. Think through the solutions

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};
