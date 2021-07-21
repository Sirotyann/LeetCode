const { cuttingRope } = require('./');

describe('剑指 Offer 14- I. 剪绳子 Tests', () => {
    it('2', () => {
        expect(cuttingRope(2)).toBe(1);
    });

    it('4', () => {
        expect(cuttingRope(4)).toBe(4);
    });

    it('10', () => {
        expect(cuttingRope(10)).toBe(36);
    });
});
