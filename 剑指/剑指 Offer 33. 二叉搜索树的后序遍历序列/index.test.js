const { verifyPostorder } = require('./');

describe('剑指 Offer 33. 二叉搜索树的后序遍历序列 Tests', () => {
    it('[1,6,3,2,5] => false', () => {
        expect(verifyPostorder([1, 6, 3, 2, 5])).toBe(false);
    });

    it('[1, 2, 3, 4, 5] => false', () => {
        expect(verifyPostorder([1, 2, 3, 4, 5])).toBe(true);
    });

    it('[4, 6, 7, 5] => true', () => {
        expect(verifyPostorder([4, 6, 7, 5])).toBe(true);

        /*
            5
           /\
          4  6
              \
               7
        
        */
    });

    it('[1,2,5,10,6,9,4,3] => false', () => {
        expect(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3])).toBe(false);
    });

    it('[1,2,3,10,8,9,4,5] => false', () => {
        expect(verifyPostorder([1, 2, 3, 10, 8, 9, 4, 5])).toBe(false);
    });

    it('[1,3,2,6,5] => true', () => {
        expect(verifyPostorder([1, 3, 2, 6, 5])).toBe(true);

        /*

                5
               / \
              2  6
             /\
            1  3
                 
        */
    });

    it('[1,3,2,6,9,11,10,7,5] => true', () => {
        expect(verifyPostorder([1, 3, 2, 6, 9, 11, 10, 7, 5])).toBe(true);

        /*

                5
               / \
              2   7
             /\   /\
            1 3  6 10
                    /\
                   9 11 

        */
    });
});
