const { reversePrint } = require('./');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

describe('剑指 Offer 06. 从尾到头打印链表 Tests', () => {
    it('Print linked list', () => {
        const list = new ListNode(1);
        const last = new ListNode(2);
        const second = new ListNode(3);
        second.next = last;
        list.next = second;
        const reverted = reversePrint(list);
        expect(reverted).toEqual([2,3,1]);
    });
});
