const { removeElement } = require('./removeElement');

describe('Remove elements tests', () => {
    it('Input: nums = [3,2,2,3], val = 3', () => {
        const nums = [3, 2, 2, 3];
        expect(removeElement(nums, 3)).toBe(2)
        expect(nums).toEqual(expect.arrayContaining([2, 2]));
    });

    it('Input: nums = [0,1,2,2,3,0,4,2], val = 2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const result = removeElement(nums, 2);
        expect(result).toBe(5);
        expect(nums).toEqual(expect.arrayContaining([0, 1, 4, 0, 3]));
    });

    it('Input: nums = [4,5], val = 4', () => {
        const nums = [4,5];
        const result = removeElement(nums, 4);
        expect(result).toBe(1);
        expect(nums).toEqual(expect.arrayContaining([5]));
    });
});