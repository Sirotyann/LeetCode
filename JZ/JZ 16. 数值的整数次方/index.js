/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (x === 0) {
        return 0;
    } else if (n === 0 || x === 1) {
        return 1;
    } else if (n === 1) {
        return x;
    } else if (n === -1) {
        return 1 / x;
    } else if (x === -1) {
        return (n % 2 === 0) ? -x : x;
    }

    const pow = (x, n) => {
        let num = x;
        for (let i = 1; i < n; i++) {
            num = num * x;
        }
        return num;
    }

    const abs_n = Math.abs(n);

    let num;
    if (abs_n % 2 === 0) {
        const half_pow = pow(x, abs_n / 2);
        num = half_pow * half_pow;
    } else {
        const half_pow = pow(x, (abs_n - 1) / 2);
        num = half_pow * half_pow * x;
    }

    return (n > 0) ? num : 1 / num;
};

module.exports = { myPow };

/*
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

 */