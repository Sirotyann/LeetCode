const { getKthFromEnd } = require('./');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

describe('剑指 Offer 22. 链表中倒数第k个节点 Tests', () => {
    it('给定一个链表: 1->2->3->4->5, 和 k = 2.  返回链表 4->5.', () => {
        const root = new ListNode(1);
        
        let element_1 = new ListNode(2);
        root.next = element_1;

        let element_2 = new ListNode(3);
        element_1.next = element_2;

        let element_3 = new ListNode(4);
        element_2.next = element_3;

        let element_4 = new ListNode(5);
        element_3.next = element_4;
        

        const result = getKthFromEnd(root, 2);
        expect(result.val).toBe(4);
        expect(result.next.val).toBe(5);
    });
});
