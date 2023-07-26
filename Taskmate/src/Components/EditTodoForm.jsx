/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditTodoForm({ editTask, task }) {
  const [inputValue, setInputValue] = useState(task.task);

  function handleChange(e) {
    setInputValue(() => {
      console.log(e.target.value);
      return e.target.value;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask(inputValue, task.id);
    setInputValue("");
  }
  return (
    <div className="TodoForm-main">
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your task"
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </div>
  );
}
