const quickSort = (arr) => {
    const sort = (index, left, right) => {
        if(left >= right) {
            return;
        }

        const x = arr[index];

        let j = right;
        let i = left;
        while (j > i) {
            while (j > i) {
                if (arr[j] < x) {
                    arr[i] = arr[j];
                    break;
                }
                j--;
            }

            while (j > i) {
                if (arr[i] > x) {
                    arr[j] = arr[i];
                    break;
                }
                i++;
            }
        }

        arr[i] = x;

        sort(left, left, i);
        sort(i + 1, i + 1, right);
    }

    sort(0, 0, arr.length - 1);
}

module.exports = { quickSort };