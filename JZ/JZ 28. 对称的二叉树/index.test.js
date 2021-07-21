const { isSymmetric } = require('./');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe('剑指 Offer 28. 对称的二叉树 Tests', () => {
    it('输入：root = [1,2,2,3,4,4,3] 输出：true', () => {
        const tree = new TreeNode(1);
        tree.left = new TreeNode(2);
        tree.right = new TreeNode(2);

        tree.left.left = new TreeNode(3);
        tree.left.right = new TreeNode(4);

        tree.right.left = new TreeNode(4);
        tree.right.right = new TreeNode(3);

        expect(isSymmetric(tree)).toBe(true);

        /* 

                 1
                / \
               2   2
              /\   /\
             3 4  4 3 

        */
    });

    it('输入：root = [1,2,2,null,3,null,3] false', () => {
        const tree = new TreeNode(1);
        tree.left = new TreeNode(2);
        tree.right = new TreeNode(2);
        tree.left.right = new TreeNode(3);
        tree.right.right = new TreeNode(3);

        expect(isSymmetric(tree)).toBe(false);

        /* 

                 1
                / \
               2   2
               \    \
               3    3 

        */
    });
});
