import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState([]);

  function persistData(newlist) {
    localStorage.setItem(
      "todos",
      JSON.stringify({
        todos: newlist,
      })
    );
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    console.log("In Delete");
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    setEditedTodo(
      todos.filter((todo, todoIndex) => {
        return todoIndex === index;
      })
    );
    persistData();
    console.log("In Edit");
    handleDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodostodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).getItem("todos");
    setTodos(localTodos);
  }, []);
  return (
    <>
      <TodoInput
        editedTodo={editedTodo}
        handleAddTodos={handleAddTodos}
      ></TodoInput>
      <TodoList
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        todos={todos}
      ></TodoList>
    </>
  );
}

export default App;
