import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [ showAddTask, setShowAddTask] = useState(false)

  const addTask = async () => {}

  return (
    <div className="App">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks />
    </div>
  );
}

export default App;
 