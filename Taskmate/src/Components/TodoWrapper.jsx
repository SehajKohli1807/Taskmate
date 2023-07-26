import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();
export default function TodoWrapper() {
  const [Tasks, setTasks] = useState([]);

  function addTask(inputValue) {
    setTasks((prevData) => {
      return [
        ...prevData,
        {
          id: uuidv4(),
          task: inputValue,
          completed: false,
          editing: false,
        },
      ];
    });
    console.log(Tasks);
  }

  function toggleComplete(id) {
    console.log("received " + id);
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((tasks) => tasks.filter((note) => note.id !== id));
  }
  function editTask(id) {
    console.log("editing "+id);
    setTasks((tasks)=>tasks.map(task=>task.id===id ? {...task, editing:!task.editing}:task));
  }

  function editTodo(val,id) {
    console.log("edit "+id);
    setTasks((tasks)=>tasks.map(task=>task.id===id ? {...task,task:val, editing:!task.editing}:task));
  }
  return (
    <div className="TodoWrapper-main">
      <h1>Taskmate..</h1>
      <TodoForm addTask={addTask} />
      {Tasks.map((task) =>
        task.editing ? (
          <EditTodoForm key={task.id} task={task} editTask={editTodo}/>
        ) : (
          <Todo
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
      )}
    </div>
  );
}
