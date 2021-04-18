/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return mergeSort(nums, 0, nums.length - 1);
};

const mergeSort = (nums, start, end) => {
    if (start === end) {
        return [nums[start]];
    }
    if (start + 1 === end) {
        return (nums[start] <= nums[end]) ? [nums[start], nums[end]] : [nums[end], nums[start]]
    }
    const mid = Math.floor((start + end) / 2);
    return merge(mergeSort(nums, start, mid), mergeSort(nums, mid + 1, end))
}

const merge = (left, right) => {
    const array = [];
    while (left.length || right.length) {
        if (left.length && (left[0] < right[0] || right.length === 0)) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return array;
}

module.exports = { sortArray };
