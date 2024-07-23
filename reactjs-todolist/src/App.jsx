import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState([]);
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    console.log("In Delete");
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    setEditedTodo(
      todos.filter((todo, todoIndex) => {
        return todoIndex === index;
      })
    );
    console.log("In Edit");
    handleDeleteTodos(index);
  }

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
