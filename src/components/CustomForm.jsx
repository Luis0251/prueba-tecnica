import {PlusIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export const CustomForm = ({addTask}) => {
   
    const [task, setTask] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask({
            name:task,
            checked:false,
            id:Date.now()
        });
        setTask("");
    }
    const handleChange = (e)=> setTask(e.target.value);
  return (
    <form className="p-3 flex" onSubmit={handleSubmit}>
            <div className='flex w-[90%]'>
            <input type="text"
            id="task"
            className="p-3 focus:outline-none border-slate-400 text-black w-full"
            value={task}
            onInput={handleChange}
            required
            autoFocus
            maxLength={60} 
            placeholder="Enter task"
             />
             </div>
             <button className="flex items-center text-white justify-center w-[50px] h-[50px] rounded-lg  bg-gradient-to-br from-purple-600 to-blue-500" 
             aria-label="add task"
              type="submit"><PlusIcon  className='h-6 w-6'/></button>
    </form>
  )
}
