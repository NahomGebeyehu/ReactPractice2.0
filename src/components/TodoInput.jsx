import { useState, useRef, useEffect } from "react";

export default function TodoInput({ handleAddTodos, editedTodo }) {
  const [todoNew, settodoNewValue] = useState("");

  useEffect(() => {
    settodoNewValue(editedTodo);
  }, [editedTodo]);

  const todoInput = useRef(null);

  return (
    <header>
      <input
        ref={todoInput}
        value={todoNew}
        placeholder="Enter ToDo ..."
        onChange={(e) => {
          settodoNewValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoInput.current.value);
          settodoNewValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
