const { minArray } = require('./');

describe('剑指 Offer 11. 旋转数组的最小数字 Tests', () => {
    it('[3,4,5,1,2]', () => {
        const array = [3, 4, 5, 1, 2];
        const min = minArray(array);
        expect(min).toBe(1);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
});
