const logic = require("./logic");

describe("should return an array of objects", () => {
  test("should return an array of objects", () => {
    const actual = logic.addTodo([], "go home");
    const expected = [{ todo: "go home", id: 1, done: false }];
    expect(actual).toEqual(expected);
  });
  test("should return an array of objects", () => {
    const actual = logic.addTodo(
      [{ todo: "go home", id: 1, done: false }],
      "play VScode"
    );
    const expected = [
      { todo: "go home", id: 1, done: false },
      { todo: "play VScode", id: 2, done: false }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an array of objects", () => {
    const actual = logic.addTodo(
      [
        { todo: "go home", id: 1, done: false },
        { todo: "play VScode", id: 2, done: false }
      ],
      "go to sleep"
    );
    const expected = [
      { todo: "go home", id: 1, done: false },
      { todo: "play VScode", id: 2, done: false },
      { todo: "go to sleep", id: 3, done: false }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an array of objects", () => {
    const actual = logic.addTodo(
      [
        { todo: "go home", id: 1, done: false },
        { todo: "play VScode", id: 2, done: false },
        { todo: "go to sleep", id: 3, done: false }
      ],
      "wake up"
    );
    const expected = [
      { todo: "go home", id: 1, done: false },
      { todo: "play VScode", id: 2, done: false },
      { todo: "go to sleep", id: 3, done: false },
      { todo: "wake up", id: 4, done: false }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an array of objects", () => {
    const actual = logic.addTodo(
      [
        { todo: "go home", id: 1, done: false },
        { todo: "play VScode", id: 2, done: false },
        { todo: "go to sleep", id: 3, done: false },
        { todo: "wake up", id: 4, done: false }
      ],
      "drink tea"
    );
    const expected = [
      { todo: "go home", id: 1, done: false },
      { todo: "play VScode", id: 2, done: false },
      { todo: "go to sleep", id: 3, done: false },
      { todo: "wake up", id: 4, done: false },
      { todo: "drink tea", id: 5, done: false }
    ];
    expect(actual).toEqual(expected);
  });
});

describe("should return an array without the deleted object", () => {
  test("should return an array without the deleted object", () => {
    const actual = logic.deleteTodo(
      [
        { todo: "go home", id: 1, done: true },
        { todo: "play VScode", id: 2, done: false },
        { todo: "go to sleep", id: 3, done: false },
        { todo: "wake up", id: 4, done: false },
        { todo: "drink tea", id: 5, done: false }
      ],
      1
    );
    const expected = [
      { todo: "play VScode", id: 2, done: false },
      { todo: "go to sleep", id: 3, done: false },
      { todo: "wake up", id: 4, done: false },
      { todo: "drink tea", id: 5, done: false }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an array without the deleted object", () => {
    const actual = logic.deleteTodo(
      [
        { todo: "play VScode", id: 1, done: false },
        { todo: "go to sleep", id: 2, done: false },
        { todo: "wake up", id: 3, done: false },
        { todo: "drink tea", id: 4, done: false }
      ],
      4
    );
    const expected = [
      { todo: "play VScode", id: 1, done: false },
      { todo: "go to sleep", id: 2, done: false },
      { todo: "wake up", id: 3, done: false }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an array without the deleted object", () => {
    const actual1 = logic.deleteTodo(
      [
        { todo: "play VScode", id: 1, done: false },
        { todo: "go to sleep", id: 2, done: false },
        { todo: "wake up", id: 3, done: false }
      ],
      2
    );
    const actual2 = logic.addTodo(actual1, "drink coffee");
    const actual3 = logic.addTodo(actual2, "watch anime");
    const expected = [
      { todo: "play VScode", id: 1, done: false },
      { todo: "wake up", id: 3, done: false },
      { todo: "drink coffee", id: 9, done: false },
      { todo: "watch anime", id: 10, done: false }
    ];
    expect(actual3).toEqual(expected);
  });
});

describe("should change the done state of the specified object", () => {
  test("should change the done state of the specified object", () => {
    const actual = logic.markTodo(
      [
        { todo: "play VScode", id: 1, done: false },
        { todo: "wake up", id: 2, done: false },
        { todo: "drink coffee", id: 9, done: false },
        { todo: "watch anime", id: 10, done: false }
      ],
      1
    );
    const expected = [
      { todo: "play VScode", id: 1, done: true },
      { todo: "wake up", id: 2, done: false },
      { todo: "drink coffee", id: 9, done: false },
      { todo: "watch anime", id: 10, done: false }
    ];
    expect(actual).toEqual(expected);
  });
  test("should change the done state of the specified object", () => {
    const actual1 = logic.markTodo(
      [
        { todo: "play VScode", id: 1, done: true },
        { todo: "wake up", id: 2, done: false },
        { todo: "drink coffee", id: 9, done: false },
        { todo: "watch anime", id: 10, done: false }
      ],
      1
    );
    const actual2 = logic.markTodo(actual1, 10);
    const expected = [
      { todo: "play VScode", id: 1, done: false },
      { todo: "wake up", id: 2, done: false },
      { todo: "drink coffee", id: 9, done: false },
      { todo: "watch anime", id: 10, done: true }
    ];
    expect(actual2).toEqual(expected);
  });
  test("should change the done state of the specified object", () => {
    const actual = logic.markTodo(
      [
        { todo: "play VScode", id: 1, done: false },
        { todo: "wake up", id: 2, done: false },
        { todo: "drink coffee", id: 9, done: false },
        { todo: "watch anime", id: 10, done: true }
      ],
      5
    );
    const expected = [
      { todo: "play VScode", id: 1, done: false },
      { todo: "wake up", id: 2, done: false },
      { todo: "drink coffee", id: 9, done: false },
      { todo: "watch anime", id: 10, done: true }
    ];
    expect(actual).toEqual(expected);
  });
  test("should change the done state of the specified object", () => {
    const actual1 = logic.addTodo(
      [
        { todo: "play VScode", id: 1, done: false },
        { todo: "wake up", id: 2, done: false },
        { todo: "drink coffee", id: 9, done: false },
        { todo: "watch anime", id: 10, done: true }
      ],
      "have lunch"
    );
    const actual2 = logic.deleteTodo(actual1, 10);
    const actual3 = logic.markTodo(actual2, 11);
    const expected = [
      { todo: "play VScode", id: 1, done: false },
      { todo: "wake up", id: 2, done: false },
      { todo: "drink coffee", id: 9, done: false },
      { todo: "have lunch", id: 11, done: true }
    ];
    expect(actual3).toEqual(expected);
  });
});
