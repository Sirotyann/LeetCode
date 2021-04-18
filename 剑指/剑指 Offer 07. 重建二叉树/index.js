/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }

    const root = new TreeNode(preorder[0]);
    const center_index = inorder.findIndex(it => it === preorder[0]);
    const left_inorder = inorder.slice(0, center_index);
    const right_inorder = inorder.slice(center_index + 1);
    const left_preorder = preorder.slice(1, left_inorder.length + 1);
    const right_preorder = preorder.slice(left_inorder.length + 1);

    if (left_preorder.length === 0) {
        root.left = null
    } else if (left_preorder.length === 1) {
        root.left = new TreeNode(left_preorder[0])
    } else {
        root.left = buildTree(left_preorder, left_inorder);
    }

    if (right_preorder.length === 0) {
        root.right = null
    } else if (right_preorder.length === 1) {
        root.right = new TreeNode(right_preorder[0])
    } else {
        root.right = buildTree(right_preorder, right_inorder);
    }
    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

module.exports = { buildTree };

/*

输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。



例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7


限制：

0 <= 节点个数 <= 5000



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/