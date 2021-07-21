/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (postorder == null) {
        return false;
    }

    const isBinSearchTree = (leaves) => {
        if (leaves == null || leaves.length == 0 || leaves.length == 1) {
            return true;
        }
        if(leaves.length == 2) {
            return leaves[0] < leaves[1];
        }
        if(leaves.length == 3) {
            return (leaves[0] < leaves[2]) && (leaves[0] < leaves[1]);
        }
        const root = leaves[leaves.length - 1];
        let left = [], right = null;
        for (let i = 0; i < leaves.length - 1; i++) {
            if (leaves[i] > root) {
                right = leaves.slice(i, leaves.length - 1);
                break;
            } else {
                left.push(leaves[i]);
            }
        }
        return isBinSearchTree(left) && isBinSearchTree(right);
    }

    return isBinSearchTree(postorder);
};

module.exports = { verifyPostorder };

/*

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true


提示：

数组长度 <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/
