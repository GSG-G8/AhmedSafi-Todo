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
