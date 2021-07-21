const { reverseList } = require('./');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

describe('剑指 Offer 24. 反转链表 Tests', () => {
    it('输入: 1->2->3->4->5->NULL  输出: 5->4->3->2->1->NULL', () => {
        const root = new ListNode(1);
        root.next = new ListNode(2);
        root.next.next = new ListNode(3);
        root.next.next.next = new ListNode(4);
        root.next.next.next.next = new ListNode(5);

        const reversed = reverseList(root);
        expect(reversed.val).toBe(5);
        expect(reversed.next.val).toBe(4);
        expect(reversed.next.next.val).toBe(3);
        expect(reversed.next.next.next.val).toBe(2);
        expect(reversed.next.next.next.next.val).toBe(1);
        expect(reversed.next.next.next.next.next).toBe(null);
    });
});
