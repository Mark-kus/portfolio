class Stack {
  constructor() {
    this.head = -1;
    this.items = {};
  }

  push(item) {
    this.head++;
    this.items[this.head] = item;
  }

  pop() {
    if (this.head === -1) {
      return;
    }
    delete this.items[this.head];
    this.head--;
  }
}

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test("is instantiated empty", () => {
    expect(stack.head).toBe(-1);
    expect(stack.items).toEqual({});
  });

  test("can add elements", () => {
    stack.push(50);
    expect(stack.head).toBe(0);
    expect(stack.items).toEqual({ 0: 50 });
  });

  test("can remove elements", () => {
    stack.push(1);
    stack.pop();
    expect(stack.head).toBe(-1);
    expect(stack.items).toEqual({});
  });
});
