const { treeToDoublyList, Node } = require('./');

describe('剑指 Offer 36. 二叉搜索树与双向链表 Tests', () => {
    it('[4,2,5,1,3]', () => {
        const tree = new Node(4);
        tree.left = new Node(2);
        tree.left.left = new Node(1);
        tree.left.right = new Node(3);
        tree.right = new Node(5);

        const head = treeToDoublyList(tree);

        expect(head.val).toBe(1);
        
        expect(head.left.val).toBe(5);
        expect(head.left.left.val).toBe(4);
        expect(head.left.left.left.val).toBe(3);
        expect(head.left.left.left.left.val).toBe(2);
        expect(head.left.left.left.left.left.val).toBe(1);

        expect(head.right.val).toBe(2);
        expect(head.right.right.val).toBe(3);
        expect(head.right.right.right.val).toBe(4);
        expect(head.right.right.right.right.val).toBe(5);
        expect(head.right.right.right.right.right.val).toBe(1);
        
    });
});
