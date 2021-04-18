const { removeDuplicates } = require('./');

describe('Remove duplicate from sorted array tests', () => {
    it('[1,1,1,2,2,3]', () => {
        const nums = [1,1,1,2,2,3];
        expect(removeDuplicates(nums)).toBe(5)
        expect(nums).toEqual(expect.arrayContaining([1,1,2,2,3]));
    });

    it('[0,0,1,1,1,1,2,3,3]', () => {
        const nums = [0,0,1,1,1,1,2,3,3];
        expect(removeDuplicates(nums)).toBe(7)
        expect(nums).toEqual(expect.arrayContaining([0,0,1,1,2,3,3]));
    });
});