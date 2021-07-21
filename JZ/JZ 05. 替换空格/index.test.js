const {replaceSpace} = require('./'); 

describe('剑指 Offer 05. 替换空格 Tests', () => {
    it("We are happy", () => {
        expect(replaceSpace('We are happy.')).toEqual('We%20are%20happy.');
    });
});
