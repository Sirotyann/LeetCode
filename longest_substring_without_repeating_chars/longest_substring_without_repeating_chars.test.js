
const {lengthOfLongestSubstring} = require('./longest_substring_without_repeating_chars');

describe("longest substring without repeating characters", () => {
    it("abcabccb", () => {
        const len = lengthOfLongestSubstring("abcabccb");
        expect(len).toBe(3);
    })

    it("abcceabecb", () => {
        const len = lengthOfLongestSubstring("abcceabecb");
        expect(len).toBe(4);
    })

    it("bbbbb", () => {
        const len = lengthOfLongestSubstring("bbbbb");
        expect(len).toBe(1);
    })

    it("pwwkew", () => {
        const len = lengthOfLongestSubstring("pwwkew");
        expect(len).toBe(3);
    })

    it("Empty string", () => {
        const len = lengthOfLongestSubstring("");
        expect(len).toBe(0);
    })

    it("Empty string 2", () => {
        const len = lengthOfLongestSubstring(" ");
        expect(len).toBe(1);
    })
})