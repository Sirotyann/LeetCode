const { twoSum } = require("./index");

describe("two sum test", ()=> {
    it('Should find the two elements', () => {
        console.log("# twosum", twoSum)
        const result = twoSum([2,7,11,15], 9);
        console.log(" result = ", result);
        expect(result).toEqual(expect.arrayContaining([0, 1]));
    });

    it('Should find the two elements [2, 4, 6]', () => {
        console.log("# twosum", twoSum)
        const result = twoSum([3, 2, 4], 6);
        console.log(" result = ", result);
        expect(result).toEqual(expect.arrayContaining([1, 2]));
    });
});