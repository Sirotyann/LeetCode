const { deleteNode, ListNode } = require('./');

describe('剑指 Offer 18. 删除链表的节点 Tests', () => {
    it('4,5,1,9', () => {
        const root = new ListNode(4);
        root.next = new ListNode(5);
        root.next.next = new ListNode(1);
        root.next.next.next = new ListNode(9);

        const list = deleteNode(root, 5);
        expect(list.next.val).toBe(1);
    });
});
