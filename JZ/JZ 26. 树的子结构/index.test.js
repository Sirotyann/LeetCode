function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const { isSubStructure } = require('./');

describe('剑指 Offer 26. 树的子结构 Tests', () => {
    it('输入：A = [1,2,3], B = [3,1] 输出：false', () => {
        const treeA = new TreeNode(1);
        treeA.left = new TreeNode(2);
        treeA.right = new TreeNode(3);

        const treeB = new TreeNode(3);
        treeB.left = new TreeNode(1);

        /* ---

             1          3
            /\         /
           2  3       1 

        --- */

        expect(isSubStructure(treeA, treeB)).toBe(false);
    });

    it('输入：A = [3,4,5,1,2], B = [4,1] true', () => {
        const treeA = new TreeNode(3);
        treeA.left = new TreeNode(4);
        treeA.right = new TreeNode(5);
        treeA.left.left = new TreeNode(1);
        treeA.left.right = new TreeNode(2);

        const treeB = new TreeNode(4);
        treeB.left = new TreeNode(1);
        // treeB.right = new TreeNode(2);

        /*---

                 3               4
                /\              /
               4  5            1
              /\
             1 2 

        ---- */

        expect(isSubStructure(treeA, treeB)).toBe(true);
    });
});
