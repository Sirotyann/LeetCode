const { isNumber } = require('./');

describe('剑指 Offer 20. 表示数值的字符串 Tests', () => {
    it('-1E-16', () => {
        expect(isNumber('-1E-16')).toBe(true);
    });
    
    it('1a6', () => {
        expect(isNumber('1a6')).toBe(falses);
    });
});
