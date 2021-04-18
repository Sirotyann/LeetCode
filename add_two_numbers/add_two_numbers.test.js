const { addTwoNumbers, ListNode } = require("./add_two_numbers");

describe("add two num", ()=> {
    it('Should add two num', () => {
        const num = addTwoNumbers(ListNode.fromArray([2,4,3]), ListNode.fromArray([5,6,4])).toArray();
        expect(num).toEqual([7,0,8]);
    });

    it('Should add two num from diff length list', () => {
        const num = addTwoNumbers(ListNode.fromArray([2,4,3]), ListNode.fromArray([5,6,4,1])).toArray();
        expect(num).toEqual([7,0,8,1]);
    });

    it('Should add two num from lists with single num', () => {
        const num = addTwoNumbers(ListNode.fromArray([2]), ListNode.fromArray([5])).toArray();
        expect(num).toEqual([7]);
    });

    it('999', () => {
        const num = addTwoNumbers(ListNode.fromArray([9,9,9,9,9,9,9]), ListNode.fromArray([9,9,9,9]));
        expect(num.toArray()).toEqual([8,9,9,9,0,0,0,1]);
    });
});