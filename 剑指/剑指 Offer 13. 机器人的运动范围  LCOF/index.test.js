const { movingCount } = require('./');

describe('剑指 Offer 13. 机器人的运动范围  LCOF Tests', () => {
    it('1', () => {
        expect(movingCount(2, 3, 1)).toBe(3);
        // 
        // 0 0 0
        // 0 0 0
        //
    });

    it('2', () => {
        expect(movingCount(3, 1, 0)).toBe(1);
    });
});
