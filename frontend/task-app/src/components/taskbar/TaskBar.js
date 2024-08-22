import react, { useState } from "react";
import "./TaskBar.css";

export default function TaskBar(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function validateTask(title, content) {
    const titleToAdd = title.trim();
    const contentToAdd = content.trim();
    if (titleToAdd.length !== 0 && contentToAdd.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  function addTask(e, title, content) {
    e.preventDefault();
    const titleToAdd = title.trim();
    const contentToAdd = content.trim();
    if (validateTask(titleToAdd, contentToAdd) === true) {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: titleToAdd, content: contentToAdd }),
      };

      fetch("http://127.0.0.1:8000/notes/create/", options)
        .then((response) => response.json())
        .then((data) => props.updateTrigger((prevTrigger) => !prevTrigger))
        .catch((error) => console.error(error));

      document.getElementById("task-form").reset();
      setTitle("");
      setContent("");
    } else {
      console.error("Need a title or content");
    }
  }

  return (
    <>
      <form id="task-form" onSubmit={(e) => addTask(e, title, content)}>
        <div>
          <label>Title</label>
          <input onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label>Content</label>
          <textarea
            id="task-form-content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
