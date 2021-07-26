const quickSort = (arr) => {
    const sort = (i, j) => {
        if (i < j) {
            let left = i, right = j; x = arr[i];
            while (left < right) {
                while (arr[right] > x && left < right) {
                    right--;
                }
                if (left < right) {
                    arr[left] = arr[right];
                }

                while (arr[left] < x && left < right) {
                    left++;
                }
                if (left < right) {
                    arr[right] = arr[left];
                }
            }
            arr[left] = x;
            sort(i, left - 1);
            sort(left + 1, j);
        }
    }

    sort(0, arr.length - 1);
}

module.exports = { quickSort };