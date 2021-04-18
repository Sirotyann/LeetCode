const { copyRandomList, Node } = require('./');

describe('剑指 Offer 35. 复杂链表的复制 Tests', () => {
    it('[[7,null],[13,1],[11,1],[10,11],[1,7]]', () => {
        const head = new Node(7);
        const n13 = new Node(13);
        const n11 = new Node(11);
        const n10 = new Node(10);
        const n01 = new Node(1);

        head.next = n13;
        head.random = null;

        n13.next = n11;
        n13.random = n01;

        n11.next = n10;
        n11.random = n01;

        n10.next = n01;
        n10.random = n11;

        n01.random = head;

        const copied = copyRandomList(head);
        expect(copied.val).toBe(7);
        expect(copied.next.val).toBe(13);
        expect(copied.random).toBe(undefined);

        expect(copied.next.next.val).toBe(11);
        expect(copied.next.next.random.val).toBe(1);

        expect(copied.next.next.next.val).toBe(10);
        expect(copied.next.next.next.random.val).toBe(11);

        expect(copied.next.next.next.next.val).toBe(1);
        expect(copied.next.next.next.next.random.val).toBe(7);

        expect(copied.next.next.next.next.next).toBe(undefined);
    });

    it('[[-1,-1]]', () => {
        const head = new Node(-1);
        head.random = head;

        const copied = copyRandomList(head);
        expect(copied.val).toBe(-1); 
        expect(copied.random.val).toBe(-1); 
    });

    it('-1,0', () => {
        const head = new Node(-1);
        const zero = new Node(0);
        head.next = zero;

        const copied = copyRandomList(head);
        expect(copied.val).toBe(-1); 
        expect(copied.next.val).toBe(0); 
    });
});
