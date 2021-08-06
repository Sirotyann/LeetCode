const { getLeastNumbers } = require('./');

describe('JZ 40. 最小的k个数 Tests', () => {
    it('[2,3,1], 2', () => {
        expect(getLeastNumbers([2, 3, 1], 2)).toEqual(expect.arrayContaining([1, 2]));
    });

    it('[4、5、1、6、2、7、3、8], 4 ', () => {
        expect(getLeastNumbers([4, 5, 1, 6, 2, 7, 3, 8], 4)).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    });

    it('[4、5、1、6、2、7、3、8], 4 ', () => {
        expect(getLeastNumbers([4, 5, 1, 6, 2, 7, 3, 8], 4)).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    });
});
