import Header from "./components/Header";
import { useState } from "react"

function App() {
  const [ showAddTask, setShowAddTask] = useState(false)

  return (
    <div className="App">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
    </div>
  );
}

export default App;
 