const { pathSum } = require('./');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


describe('剑指 Offer 34. 二叉树中和为某一值的路径 Tests', () => {
    it('target = 22', () => {
        const tree = new TreeNode(5);
        tree.left = new TreeNode(4);
        tree.left.left = new TreeNode(11);
        tree.left.left.left = new TreeNode(7);
        tree.left.left.right = new TreeNode(2);

        tree.right = new TreeNode(8);
        tree.right.left = new TreeNode(13);
        tree.right.right = new TreeNode(4);
        tree.right.right.left = new TreeNode(5);
        tree.right.right.right = new TreeNode(1);

        expect(pathSum(tree, 22)).toEqual([
            [5, 4, 11, 2],
            [5, 8, 4, 5]
        ]);

        /*
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1

        */
    });


    it('target = 1', () => {
        const tree = new TreeNode(1);
        tree.left = new TreeNode(2);

        expect(pathSum(tree, 1)).toEqual([]);
    });

    it('target = 3', () => {
        const tree = new TreeNode(-2);
        tree.right = new TreeNode(-3);

        expect(pathSum(tree, -5)).toEqual([[-2, -3]]);

    });
});
