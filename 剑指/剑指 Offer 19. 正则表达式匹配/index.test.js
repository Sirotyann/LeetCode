const { isMatch } = require('./');

describe('剑指 Offer 19. 正则表达式匹配 Tests', () => {
    it('aa a', () => {
        expect(isMatch("aa", "a")).toBe(false);
    });

    it('abc abc', () => {
        expect(isMatch("abc", "abc")).toBe(true);
    });

    it('abc a*bc', () => {
        expect(isMatch("abc", "a*bc")).toBe(true);
    });

    it('mississippi mis*is*p*.', () => {
        expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
    });

    it('issippi is*p*.', () => {
        expect(isMatch("issippi", "is*p*.")).toBe(false);
    });

    it('ab .*', () => {
        expect(isMatch("ab", ".*")).toBe(true);
    });

    it('aab c*a*b', () => {
        expect(isMatch("aab", "c*a*b")).toBe(true);
    });

    it('cb ca*b', () => {
        expect(isMatch("cb", "ca*b")).toBe(true);
    });

    it('deb ca*b', () => {
        expect(isMatch("deb", "ca*b")).toBe(false);
    });

    it('aaa ab*a*c*a', () => {
        expect(isMatch("aaa", "ab*a*c*a")).toBe(true);
    });

    it('a .*..a*', () => {
        expect(isMatch("a", ".*..a*")).toBe(false);
    });
});
