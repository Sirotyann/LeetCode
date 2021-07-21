const { mirrorTree } = require('./');

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe('剑指 Offer 27. 二叉树的镜像 Tests', () => {
    it('输入：root = [4,2,7,1,3,6,9] 输出：[4,7,2,9,6,3,1]', () => {
        const tree = new TreeNode(4);
        tree.left = new TreeNode(2);
        tree.right = new TreeNode(7);

        tree.left.left = new TreeNode(1);
        tree.left.right = new TreeNode(3);

        tree.right.left = new TreeNode(6);
        tree.right.right = new TreeNode(9);

        const mirror = mirrorTree(tree);
        expect(mirror.val).toBe(4);
        expect(mirror.left.val).toBe(7);
        expect(mirror.right.val).toBe(2);

        expect(mirror.left.left.val).toBe(9);
        expect(mirror.left.right.val).toBe(6);

        expect(mirror.right.left.val).toBe(3);
        expect(mirror.right.right.val).toBe(1);
        
        /*

             4                       4
            / \                     / \
           2   7         =>        7   2   
          /\   /\                 /\   /\
         1 3  6  9               9  6  3 1

        */
    });
});
