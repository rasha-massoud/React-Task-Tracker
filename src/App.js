import { useState } from "react"
import Header from "./components/Header";
import AddTask from "./components/AddTask"

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
    </div>
  );
}

export default App;
 