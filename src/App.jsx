import { useState } from "react";
import { CustomForm } from "./components/CustomForm"
import { TaskList } from "./components/taskList";
import { EditForm } from "./components/EditForm";

function App() {
  const [tasks,setTasks] = useState([])
  const [editedTask,setEditedTask] = useState(null)
  const [isEditing,setIsEditing] = useState(false)
  const addTask = (task) =>{
    setTasks(prevState =>[...prevState, task])
  }
 const deleteTask = (id) =>{
  setTasks(prevState => prevState.filter(t=> t.id !== id));
 }
 const ToggleTask = (id) =>{
  setTasks(prevState => prevState.map(t => t.id === id ? 
     {...t, checked: !t.checked} : t ))
 }
 const upDateTask = (task) =>{
  setTasks(prevState => prevState.map(t => t.id === task.id ? 
     {...t, name: task.name} : t ))

     //TODO: Close Mode
 }
 const enterEditMode= (task) =>{
  setEditedTask(task);
  setIsEditing(true);
  //TODO: set focus back to origial
 }
  return (
    <div className="bg-black h-screen p-3">
     <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-gradient-to-r from-cyan-200 to-cyan-400">
      <header><h1 className="text-3xl text-center font-semibold ">My Task List</h1></header>
      {
    isEditing && (
          <EditForm editedTask={editedTask} upDateTask={upDateTask}/>
        )
      }
      <CustomForm addTask={addTask} />
      {
        tasks && <TaskList tasks={tasks} deleteTask={deleteTask} ToggleTask={ToggleTask}
        enterEditMode={enterEditMode}/>
      }
     </div>
     </div>
  )
}

export default App
