const { getLeastNumbers } = require('./');

describe('JZ 40. 最小的k个数 Tests', () => {
    it('[3,2,1] => 2', () => {
        expect(getLeastNumbers([3,2,1])).toBe(2);
    });
});
