const { removeDuplicates } = require('./');

describe('Remove duplicate from sorted array tests', () => {
    it('Input: nums = [1,1,2]', () => {
        const nums = [1,1,2];
        expect(removeDuplicates(nums)).toBe(2)
        expect(nums).toEqual(expect.arrayContaining([1, 2]));
    });


    it('Input: nums = [0,0,1,1,1,2,2,3,3,4]', () => {
        const nums = [0,0,1,1,1,2,2,3,3,4];
        expect(removeDuplicates(nums)).toBe(5)
        expect(nums).toEqual(expect.arrayContaining([0,1,2,3,4]));
    });
});