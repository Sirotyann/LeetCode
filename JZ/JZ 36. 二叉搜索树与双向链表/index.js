/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (root == null) return null;
    let prev = null;
    let head = null;
    const loop_tree = (node) => {
        if (node.left) {
            loop_tree(node.left);
        }
        if (head == null) {
            head = node;
        }
        if (prev != null) {
            prev.right = node;
            node.left = prev;
        }
        prev = node;
        if (node.right) {
            loop_tree(node.right);
        }
    }
    loop_tree(root);

    head.left = prev;
    prev.right = head;
    return head;
};

module.exports = { treeToDoublyList, Node };

/*
输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
*/