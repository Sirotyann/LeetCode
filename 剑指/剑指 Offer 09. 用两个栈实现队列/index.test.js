const { CQueue } = require('./');

describe('剑指 Offer 09. 用两个栈实现队列 Tests', () => {
    it('CQueue test', () => {
        const queue = new CQueue();
        queue.appendTail(3);
        expect(queue.deleteHead()).toBe(3);
        expect(queue.deleteHead()).toBe(-1);
    });

    it('CQueue test2', () => {
        const queue = new CQueue();
        queue.appendTail(1);
        queue.appendTail(2);
        queue.appendTail(3);
        expect(queue.deleteHead()).toBe(1);
        expect(queue.deleteHead()).toBe(2);
        expect(queue.deleteHead()).toBe(3);
    });

    it('CQueue test3', () => {
        const queue = new CQueue();
        queue.appendTail(1);
        expect(queue.deleteHead()).toBe(1);
        queue.appendTail(2);
        queue.appendTail(3);
        expect(queue.deleteHead()).toBe(2);
        expect(queue.deleteHead()).toBe(3);
    });
});
