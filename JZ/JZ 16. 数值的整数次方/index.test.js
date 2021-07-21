const { myPow } = require('./');

describe('剑指 Offer 16. 数值的整数次方 Tests', () => {
    it('2 - 10', () => {
        expect(myPow(2.0000, 10)).toBe(1024.00000);
    });
    
    it('2.1 - 3', () => {
        const num = myPow(2.10000, 3);
        console.log(`num ${num}`, Math.abs(num - 9.26100), Number.EPSILON);
        expect(Math.abs(num - 9.26100) < Number.EPSILON).toBe(true);
    });

    it('2.2.00000 - -2', () => {
        expect(myPow(2.00000, -2)).toBe(0.25);
    });

    it('8.95371 - -1', () => {
        expect(myPow(8.95371, -1)).toBe(0.11169);
    });

    it('8.95371 - 1', () => {
        expect(myPow(8.95371, 1)).toBe(8.95371);
    });
});
