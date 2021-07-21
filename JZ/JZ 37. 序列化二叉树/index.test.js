const { TreeNode, serialize, deserialize } = require('./');

describe('剑指 Offer 37. 序列化二叉树 Tests', () => {
    it('[1,2,3,null,null,4,5]', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);

        expect(serialize(root)).toEqual('1,2,3,null,null,4,5,null,null,null,null');
        // expect(serialize(root)).toEqual([1,2,3,null,null,4,5]);

        // const tree = deserialize([1,2,3,null,null,4,5]);
        // expect(tree.val).toBe(1);
        // expect(tree.left.val).toBe(2);
        // expect(tree.left.left).toBe(null);
        // expect(tree.left.right).toBe(null);
        // expect(tree.right.val).toBe(3);
        // expect(tree.right.left.val).toBe(4);
        // expect(tree.right.right.val).toBe(5);
    });

    it('deserialize', () => {
        const tree = deserialize('1,2,3,null,null,4,5,null,null,null,null');
        expect(tree.val).toBe(1);
        expect(tree.left.val).toBe(2);
        expect(tree.left.left).toBe(null);
        expect(tree.left.right).toBe(null);
        expect(tree.right.val).toBe(3);
        expect(tree.right.left.val).toBe(4);
        expect(tree.right.right.val).toBe(5);
    })
});
