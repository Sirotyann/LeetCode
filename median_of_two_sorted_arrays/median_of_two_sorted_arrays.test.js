const { findMedianSortedArrays } = require('./median_of_two_sorted_arrays');

describe("median_of_two_sorted_arrays tests", () => {
    it("[2]", () => {
        const result = findMedianSortedArrays([2], []);
        expect(result).toBe(2.00000);
    });

    it("[0,0], [0,0]", () => {
        const result = findMedianSortedArrays([0,0], [0,0]);
        expect(result).toBe(0.00000);
    });

    it("[1,2], [3,4]", () => {
        const result = findMedianSortedArrays([1,2], [3,4]);
        expect(result).toBe(2.50000);
    });
});