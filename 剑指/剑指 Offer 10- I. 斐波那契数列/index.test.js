const { fib} = require('./');

describe('剑指 Offer 10- I. 斐波那契数列 Tests', () => {
    it('2', () => {
        expect(fib(2)).toBe(1);
    });

    it('5', () => {
        expect(fib(5)).toBe(5);
    });

    it('6', () => {
        expect(fib(6)).toBe(8);
    });
});
