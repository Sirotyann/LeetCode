const { mergeTwoLists } = require('./');


function ListNode(val) {
    this.val = val;
    this.next = null;
}

describe('剑指 Offer 25. 合并两个排序的链表 Tests', () => {
    it('输入：1->2->4, 1->3->4  输出：1->1->2->3->4->4', () => {
        const listA = new ListNode(1);
        listA.next = new ListNode(2);
        listA.next.next = new ListNode(4);

        const listB = new ListNode(1);
        listB.next = new ListNode(3);
        listB.next.next = new ListNode(4);

        const merged = mergeTwoLists(listA, listB);
        expect(merged.val).toBe(1);
        expect(merged.next.val).toBe(1);
        expect(merged.next.next.val).toBe(2);
        expect(merged.next.next.next.val).toBe(3);
        expect(merged.next.next.next.next.val).toBe(4);
        expect(merged.next.next.next.next.next.val).toBe(4);
        expect(merged.next.next.next.next.next.next).toBe(null);
    });
});
