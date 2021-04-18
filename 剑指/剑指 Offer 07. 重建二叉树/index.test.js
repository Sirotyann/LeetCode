const { buildTree } = require('./');

describe('剑指 Offer 07. 重建二叉树 Tests', () => {
    it('Tree build 1', () => {
        /*
                 3
                / \
               9  20
                  / \
                 15 7
        */
        const preorder = [3, 9, 20, 15, 7]
        const inorder = [9, 3, 15, 20, 7]
        const tree = buildTree(preorder, inorder);
        expect(tree.val).toBe(3);
        expect(tree.left.val).toBe(9);
        expect(tree.left.left).toBeNull();
    });

    it('Tree build 2', () => {
        /*
                 10
                / \
               6  14
              /\  / \
             4 8 12 16
        */
        const preorder = [10, 6, 4, 8, 14, 12, 16]
        const inorder = [4, 6, 8, 10, 12, 14, 16]
        const tree = buildTree(preorder, inorder);
        expect(tree.val).toBe(10);
        expect(tree.left.val).toBe(6);
        expect(tree.left.left.val).toBe(4);
        expect(tree.left.right.val).toBe(8);
        expect(tree.right.val).toBe(14);
        expect(tree.right.left.val).toBe(12);
        expect(tree.right.right.val).toBe(16);
    });

    it('Tree build 3', () => {
        /*
                 10
                / \
               6  14
              /\   \
             4 8   16
        */
        const preorder = [10, 6, 4, 8, 14, 16]
        const inorder = [4, 6, 8, 10, 14, 16]
        const tree = buildTree(preorder, inorder);
        expect(tree.val).toBe(10);
        expect(tree.left.val).toBe(6);
        expect(tree.left.left.val).toBe(4);
        expect(tree.left.right.val).toBe(8);
        expect(tree.right.val).toBe(14);
        expect(tree.right.right.val).toBe(16);
    });

    it('Tree build 4', () => {
        /*
                 3
                / \
               9  20
        */
        const preorder = [3, 9, 20]
        const inorder = [9, 3, 20]
        const tree = buildTree(preorder, inorder);
        expect(tree.val).toBe(3);
        expect(tree.left.val).toBe(9);
        expect(tree.right.val).toBe(20);
    });
});
