/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null || (root.left == null && root.right == null)) {
        return true;
    } else if (
        (root.left == null && root.right != null) ||
        (root.left != null && root.right == null) ||
        root.left.val != root.right.val
    ) {
        return false;
    }

    const isMirro = (A, B) => {
        if (A == null && B == null) {
            return true;
        } else if ((A == null && B != null) || (B == null && A != null) || A.val != B.val) {
            return false;
        } else if (A.left == null && A.right == null && B.left == null && B.right == null) {
            return true;
        } else {
            return isMirro(A.left, B.right) && isMirro(A.right, B.left);
        }
    }

    return isMirro(root.left, root.right);
};

module.exports = { isSymmetric };


/*
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3



示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false


限制：

0 <= 节点个数 <= 1000

注意：本题与主站 101 题相同：https://leetcode-cn.com/problems/symmetric-tree/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/