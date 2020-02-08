// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const containerNodeChileds = container.childNodes;
  const addTodoForm = document.getElementById("add-todo");

  let state = JSON.parse(localStorage.getItem("state"));
  if (!state) state = [];

  // This function takes a todo, it returns the DOM node representing that todo
  const createTodoNode = function(todo) {
    const todoNode = document.createElement("li");
    const descriptionSpanNode = document.createElement("span");
    const deleteButtonNode = document.createElement("button");
    const markButtonNode = document.createElement("button");
    const trashIcon = document.createElement("i");
    const markIcon = document.createElement("i");

    descriptionSpanNode.textContent = todo.todo;

    deleteButtonNode.addEventListener("click", function(event) {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      localStorage.setItem("state", JSON.stringify(newState));
      update(newState);
    });

    markButtonNode.addEventListener("click", function(event) {
      const newState = todoFunctions.markTodo(state, todo.id);
      localStorage.setItem("state", JSON.stringify(newState));
      update(newState);
    });
    todoNode.appendChild(descriptionSpanNode);
    deleteButtonNode.appendChild(trashIcon);
    markButtonNode.appendChild(markIcon);
    todoNode.appendChild(deleteButtonNode);
    todoNode.appendChild(markButtonNode);

    // add classes for css
    trashIcon.classList.add("fa", "fa-trash");
    markIcon.classList.add("fa", "fa-check");
    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const description = event.target.elements[0]["value"];
      const newState = todoFunctions.addTodo(state, description);
      localStorage.setItem("state", JSON.stringify(newState));
      event.target.elements[0]["value"] = "";
      update(newState);
    });
  }

  // you should not need to change this function
  const update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  // I had to make changes on this function - AhmedSafi -
  const renderState = function(state) {
    const todoListNode = document.createElement("ul");
    const completedTodoNode = document.createElement("ul");


    state.forEach(function(todo) {
      if (todo.done) completedTodoNode.appendChild(createTodoNode(todo));
      else todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, containerNodeChileds[0]);
    container.replaceChild(completedTodoNode, containerNodeChileds[1]);
  };

  if (container) renderState(state);
})();
