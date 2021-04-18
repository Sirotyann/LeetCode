/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    const result = [];
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(it => `${it}`);

    const number = [];
    const dfs = (index) => {
        nums.forEach(it => {
            number[index] = it;
            if (index == n - 1) {
                result.push(number.slice(number.findIndex(it => it != 0)).join(''));
            } else {
                dfs(index + 1);
            }
        });
    }
    dfs(0);
    return result.slice(1);
};

module.exports = { printNumbers };


/*

const temp = Array.from({ length: n });
    const nums = [];
    const increase = () => {
        if (temp[n - 1] == 9) {
            temp[n - 1] = 0;
            for (let i = n - 2; i >= 0; i--) {
                if (temp[i] == 9) {
                    temp[i] = 0;
                } else {
                    temp[i] = (temp[i] == undefined) ? 1 : (temp[i] + 1);
                    break;
                }
            }
        } else {
            temp[n - 1] = (temp[n - 1] == undefined) ? 1 : (temp[n - 1] + 1);;
        }
    };

    do {
        increase();
        nums.push(temp.filter(it => it != undefined).join(''));
    } while (temp.findIndex(it => it != 9) >= 0);

    return nums;

*/
/*
输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

说明：
用返回一个整数列表来代替打印
n 为正整数
*/
