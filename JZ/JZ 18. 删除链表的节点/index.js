/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let item = head;
    let prev = null;
    while (item.val != val && item.next) {
        prev = item;
        item = item.next;
    }
    if (prev) {
        prev.next = item.next;
        return head;
    } else {
        return head.next;
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

module.exports = { deleteNode, ListNode };
