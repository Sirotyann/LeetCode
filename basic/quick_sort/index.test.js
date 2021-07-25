const { quickSort } = require('./');

describe('Quick sort Tests', () => {
    it('[3,1,2]', () => {
        const arr = [3, 1, 2];
        quickSort(arr);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('[30, 40, 60, 10, 20, 50]', () => {
        const arr = [30, 40, 60, 10, 20, 50];
        quickSort(arr);
        expect(arr).toEqual([10, 20, 30, 40, 50, 60]);
    });
});