/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (head == null) {
        return null;
    }
    
    let current = head;
    while (current != null) {
        const tmp = current.next;
        const clone_current = new Node(current.val);
        clone_current.next = current.next
        current.next = clone_current;
        current = tmp;
    }

    current = head;
    while (current != null) {
        if (current.random != null) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    const copied = head.next;
    current = head;
    while (current.next != null) {
        const tmp = current.next;
        current.next = current.next.next;
        current = tmp;
    }

    return copied;
};

/*  普通方法是先循环一次建立一个 node 的 map，然后第二次循环 random 指向的 node 就已经有了。
    比较好的方法是：
        第一次循环把复制的链表放在链表的后面  A->A'->B->B'->C->C'，
        第二次循环的时候把复制链表的random补上
        第三次循环的时候把复制的链表分离出来 A'->B'->C'
*/

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


module.exports = { copyRandomList, Node };

/*


请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。



示例 1：



输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
示例 2：



输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
示例 3：



输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
示例 4：

输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。


提示：

-10000 <= Node.val <= 10000
Node.random 为空（null）或指向链表中的节点。
节点数目不超过 1000 。


注意：本题与主站 138 题相同：https://leetcode-cn.com/problems/copy-list-with-random-pointer/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/