import react, { useState, useEffect } from "react";
import Task from "../task/Task";
import "./TaskList.css";

export default function TaskBar(props) {
  const [tasks, setTasks] = useState([]);

  function getTasks() {
    fetch("http://127.0.0.1:8000/notes/")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getTasks();
  }, [props.trigger]);

  return (
    <div id="task-list">
      <h1>Tasks: </h1>
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              content={task.content}
              updateTrigger={props.updateTrigger}
            />
          );
        })}
      </ul>
    </div>
  );
}
