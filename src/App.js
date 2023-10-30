import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [ showAddTask, setShowAddTask] = useState(false)

  const addTask = async () => {}
  const tasks = useSelector((state) => state.tasks)

  return (
    <div className="App">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}/>
      ) : (
        "No Tasks To Show!"
      )}
    </div>
  );
}

export default App;
 