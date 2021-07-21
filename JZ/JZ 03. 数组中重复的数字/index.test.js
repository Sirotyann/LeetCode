const {findRepeatNumber} = require('./'); 

describe('剑指 Offer 03. 数组中重复的数字 Tests', () => {
    it("[2, 3, 1, 0, 4, 5, 3]", () => {
        const result = findRepeatNumber([2, 3, 1, 0, 4, 5, 3]);
        expect(result).toBe(3)
    });
});
