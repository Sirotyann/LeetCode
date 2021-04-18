const {rotate} = require('./');

describe('Rotate Array tests', ()=>{
    it('nums = [1,2,3,4,5,6,7], k = 3', () => {
        const nums = [1,2,3,4,5,6,7];
        rotate(nums, 3);
        console.log("# nums", nums)
        expect(nums).toEqual([5,6,7,1,2,3,4]);
    });

    it('nums = [-1,-100,3,99], k = 2', () => {
        const nums = [-1,-100,3,99];
        rotate(nums, 2);
        console.log("# nums", nums)
        expect(nums).toEqual([3,99,-1,-100]);
    });
});