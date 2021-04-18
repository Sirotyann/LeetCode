
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//     const nums_count = nums1.length + nums2.length;
//     const is_odd = nums_count % 2 === 0;
//     const median_index_1 = (is_odd ? (nums_count / 2 - 1) : Math.ceil(nums_count / 2)) - 1;
//     const median_index_2 = is_odd ? nums_count / 2 : median_index_1;

//     if (nums1.length === 0) {
//         return (nums2[median_index_1] + nums2[median_index_2]) / 2;
//     } else if (nums2.length === 0) {
//         return (nums1[median_index_1] + nums1[median_index_2]) / 2;
//     }

//     let index_1 = 0;
//     let index_2 = 0;
//     let median_1 = null;
//     let median_2 = null;
//     while (index_1 + index_2 <= median_index_2) {
//         if (index_1 + index_2 == median_index_1) {
//             median_1 = Math.min(nums1[index_1], nums2[index_2]);
//         }
//         if (nums1[index_1] < nums2[index_2]) {
//             index_1++;
//         } else if (nums1[index_1] >= nums2[index_2]) {
//             index_2++;
//         }
//         if (index_1 + index_2 == median_index_2) {
//             median_2 = Math.min(nums1[index_1], nums2[index_2]);
//         }
//     }
//     return (median_2 == null) ? median_1 : (median_1 + median_2) / 2;
// };

// 1   3   5   7   9
//   2   4   6   8
var findMedianSortedArrays = function (nums1, nums2) {
    const nums_count = nums1.length + nums2.length;
    const is_odd = nums_count % 2 === 0;
    const median_index_1 = (is_odd ? (nums_count / 2 - 1) : Math.ceil(nums_count / 2)) - 1;
    const median_index_2 = is_odd ? nums_count / 2 : median_index_1;
    let k = Math.floor(median_index_1 / 2);

    while(k > 1) {
        const removed_count = Math.floor(k/2)
    }
};


module.exports = { findMedianSortedArrays }

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).



Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000


Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
*/