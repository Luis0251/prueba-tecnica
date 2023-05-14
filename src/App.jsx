import { useState } from "react";
import { CustomForm } from "./components/CustomForm"
import { TaskList } from "./components/taskList";

function App() {
  const [tasks,setTasks] = useState([])
  const addTask = (task) =>{
    setTasks(prevState =>[...prevState, task])
  }
 const deleteTask = (id) =>{
  setTasks(prevState => prevState.filter(t=> t.id !== id));
 }
 const ToggleTask = (id) =>{
  setTasks(prevState => prevState.map(t => t.id !== id ? 
     {...t, checked: !t.checked} : t ))
 }
  return (
    <div className="mx-4vw max-w-screen-lg sm:mx-auto">
     <div className="grid gap-y-8 md:gap-y-[3.5vmax] text-center">
      <header><h1 className="text-3xl text-center ">My Task List</h1></header>
      <CustomForm addTask={addTask} />
      {
        tasks && <TaskList tasks={tasks} deleteTask={deleteTask} ToggleTask={ToggleTask}/>
      }
     </div>
     </div>
  )
}

export default App
