
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.toArray = () => {
        const arr = [];
        let cursor = this;
        while (cursor != null) {
            arr.push(cursor.val);
            cursor = cursor.next
        }
        return arr;
    }
}
ListNode.fromArray = (arr) => {
    let prev = null;
    [...arr].reverse().forEach(it => {
        prev = new ListNode(it, prev);
    });
    return prev;
}

const addTwoNumbers = function (l1, l2) {
    let carrOver = false;
    let root = null;
    let cursor = null;
    let node1 = l1;
    let node2 = l2;
    while (node1 != null || node2 != null) {
        let num = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + (carrOver ? 1 : 0);
        if (num >= 10) {
            num = num - 10;
            carrOver = true;
        } else {
            carrOver = false;
        }
        if (cursor == null) {
            root = new ListNode(num, null);
            cursor = root;
        } else {
            cursor.next = new ListNode(num, null);
            cursor = cursor.next;
        }
        node1 = node1 ? node1.next : null;
        node2 = node2 ? node2.next : null;
    }
    if (carrOver) {
        cursor.next = new ListNode(1, null);
    }
    return root;
};

module.exports = { addTwoNumbers, ListNode };

/**
 *  https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 *
 */