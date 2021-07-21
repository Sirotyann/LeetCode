/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
    let dp = Array.from({ length: s.length + 1 }).map(() => Array.from({ length: p.length + 1 }));
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j <= p.length; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = true;
            } else if (i == 0) {
                if (p[j - 1] == '*') {
                    dp[i][j] = (j >= 2) ? dp[i][j - 2] : true;
                } else if (p) {
                    dp[i][j] = false;
                }
            } else if (j == 0) {
                dp[i][j] = false;
            } else if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == '*') {
                if (s[i - 1] == p[j - 2] || p[j - 2] == '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            } else {
                dp[i][j] = false;
            }
           
        }
    }

    // for(let m = 0;m<dp.length;m++){
    //     console.log(dp[m].map(it => it?'T':'F').join(' '));
    // }
    return !!dp[s.length][p.length];
};

/*
tutorial: https://www.youtube.com/watch?v=l3hda49XcDE

1. s[i] == p[j] || p[j] == '.'  =>   dp[i][j] = dp[i-1][j-1]
2. p[j] == '*'
    1) a ab*    s[i] != p[j-1]    =>  dp[i][j] = dp[i][j-2]
    2) b b*     s[i] == p[j-1]    =>  dp[i][j] = dp[i-1][j] || dp[i][j-2]
            (xa* -  xa  => 将a看成a*的一部分，于是 xa* - x)
 
*/
module.exports = { isMatch };

/*
请实现一个函数用来匹配包含'. '和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3:

输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
示例 4:

输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
示例 5:

输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母以及字符 . 和 *，无连续的 '*'。
注意：本题与主站 10 题相同：https://leetcode-cn.com/problems/regular-expression-matching/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/