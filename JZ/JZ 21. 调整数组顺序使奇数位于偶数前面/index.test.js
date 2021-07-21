const { exchange} = require('./');

describe('剑指 Offer 21. 调整数组顺序使奇数位于偶数前面 Tests', () => {
    it('1,2,3,4', () => {
        const array = [1, 2, 3, 4];
        expect(exchange(array)).toEqual([1, 3, 2, 4]);
    });
});
