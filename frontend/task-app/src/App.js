import "./App.css";
import TaskBar from "./components/taskbar/TaskBar.js";
import TaskList from "./components/tasklist/TaskList.js";
import { useState } from "react";

function App() {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  return (
    <div id="task-container">
      <TaskBar updateTrigger={setUpdateTrigger}></TaskBar>
      <TaskList
        trigger={updateTrigger}
        updateTrigger={setUpdateTrigger}
      ></TaskList>
    </div>
  );
}

export default App;
