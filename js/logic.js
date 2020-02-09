// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    return todos.concat({
      todo: newTodo,
      id: this.generateId(),
      done: false
    });
  },
  deleteTodo: function(todos, idToDelete) {
    this.generateId();
    return this.cloneArrayOfObjects(todos).filter(element => {
      return element.id !== idToDelete;
    });
  },
  markTodo: function(todos, idToMark) {
    return this.cloneArrayOfObjects(todos).map(element => {
      if (element.id === idToMark && element.done === false)
        element.done = true;
      else if (element.id === idToMark && element.done === true)
        element.done = false;
      return element;
    });
  },
  sortByName: (x,y) => {
    const xTodo = x.todo.toLowerCase();
    const yTodo = y.todo.toLowerCase();
    if (xTodo < yTodo) return -1;
    if (xTodo > yTodo) return 1;
    return 0;
  },
  sortTodos: function(todos, sortFunction) {
    return this.cloneArrayOfObjects(todos).sort((x, y) => sortFunction(x, y));
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
