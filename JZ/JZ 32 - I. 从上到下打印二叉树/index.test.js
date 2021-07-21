const { levelOrder } = require('./');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe('剑指 Offer 32 - I. 从上到下打印二叉树 Tests', () => {
    it('二叉树: [3,9,20,null,null,15,7] => [3,9,20,15,7]', () => {
        const tree = new TreeNode(3);
        tree.left = new TreeNode(9);

        tree.right = new TreeNode(20);
        tree.right.left = new TreeNode(15);
        tree.right.right = new TreeNode(7);

        const array = levelOrder(tree);
        expect(array).toEqual([3, 9, 20, 15, 7]);

        /*

             3
            / \
           9  20
              / \
             15  7

        */
    });
});
