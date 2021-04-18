/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root == null) return [];
    const serialized = [];
    let nodes = [root];
    let bottom = false;

    while (!bottom) {
        const next_nodes = [];
        bottom = true;
        nodes.forEach(node => {
            if (node == null) {
                serialized.push(null);
            } else {
                serialized.push(node.val);
                if (bottom && node != null) {
                    bottom = false;
                }
                next_nodes.push(node.left ? node.left : null);
                next_nodes.push(node.right ? node.right : null);
            }
        });
        nodes = next_nodes;
    }
    return serialized.map(it => `${it}`).join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    //'1,2,3,null,null,4,5,null,null,null,null'
    if (data == null || data.length == 0) return null;
    const values = data.split(',').map(it => (it == 'null' ? null : parseInt(it, 10)));
    const head = new TreeNode(values[0]);

    let last_level = [head];
   
    let i = 1;
    while (i < values.length) {
        let next_level = [];
        for (let j = 0; j < last_level.length; j++) {
            const node = last_level[j];
            if(values[i] != null) {
                node.left = new TreeNode(values[i]);
                next_level.push(node.left);
            } else {
                node.left = null;
            }

            if(values[i + 1] != null) {
                node.right = new TreeNode(values[i+1]);
                next_level.push(node.right);
            } else {
                node.right = null;
            }
            i += 2;
        }
        last_level = next_level;
        next_level = [];
    }

    return head;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { TreeNode, serialize, deserialize };

/*

请实现两个函数，分别用来序列化和反序列化二叉树。

示例:

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/