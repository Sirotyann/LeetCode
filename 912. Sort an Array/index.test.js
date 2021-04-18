const { sortArray } = require('./');

describe('912. Sort an Array Tests', () => {
    it('Sort [5,2,3,1]', () => {
        const sorted = sortArray([5,2,3,1]);
        expect(sorted).toEqual([1,2,3,5]);
    });

    it('Sort [5,1,1,2,0,0]', () => {
        const sorted = sortArray([5,1,1,2,0,0]);
        expect(sorted).toEqual([0,0,1,1,2,5]);
    });
});
