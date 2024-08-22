import react, { useState } from "react";
import "./Task.css";

export default function Task(props) {
  function deleteTask() {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(`http://127.0.0.1:8000/notes/delete/${props.id}/`, options)
      .then((response) => response.json())
      .then((data) => console.log("Data", data))
      .then(() => props.updateTrigger((prevTrigger) => !prevTrigger))
      .catch((error) => console.error(error));
  }
  return (
    <div className="task-container">
      <div className="task-header">
        <h2>{props.title}</h2>
        <button onClick={deleteTask}>Delete</button>
      </div>

      <p>{props.content}</p>

      <hr />
    </div>
  );
}
