class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(item) {
        this.top++;
        this.items[this.top] = item;
    }
    
    pop() {
        const item = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return item;
    }
}

describe("My Stack", () =>{

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it("is created empty", () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it("can push to the top", () => {
        stack.push("🥑");
        expect(stack.top).toBe(0);
        expect(stack.items[0]).toBe("🥑");
    });

    it("can pop off", () => {
        stack.push("🥑");
        stack.push("🍌");
        stack.pop();
        expect(stack.top).toBe(0);
        expect(stack.items[0]).toBe("🥑");
    });
})