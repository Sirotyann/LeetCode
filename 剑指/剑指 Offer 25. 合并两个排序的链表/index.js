/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    let root;
    if(l1.val < l2.val) {
        root = l1;
        l1 = l1.next;
    } else {
        root = l2;
        l2 = l2.next;
    }
    let it = root;
    while (l1 || l2) {
        if (l1 == null) {
            it.next = l2;
            break;
        } else if (l2 == null) {
            it.next = l1;
            break;
        } else if(l1.val < l2.val) {
            it.next = l1;
            it = it.next;
            l1 = l1.next;
        } else if(l1.val >= l2.val) {
            it.next = l2;
            it = it.next;
            l2 = l2.next;
        }
    }
    return root;
};

module.exports = { mergeTwoLists };

/*
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：

0 <= 链表长度 <= 1000

注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/