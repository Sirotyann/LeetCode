const { MinStack } = require('./');

describe('剑指 Offer 30. 包含min函数的栈 Tests', () => {
    it('MinStack Test 1', () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.min()).toBe(-3);
        minStack.pop();
        expect(minStack.top()).toBe(0);
        expect(minStack.min()).toBe(-2);
    });


    it('MinStack Test 2', () => {
        const minStack = new MinStack();
        minStack.push(null);
        minStack.push(2);
        minStack.push(0);
        minStack.push(3); // [null, 2, 0, 3]
        expect(minStack.min()).toBe(0);
        minStack.pop(); // [null, 2, 0]
        expect(minStack.min()).toBe(0);
        minStack.pop(); // [null, 2]
        expect(minStack.min()).toBe(2);
        minStack.pop(); // [null]
        expect(minStack.min()).toBe(2);
    });
});
