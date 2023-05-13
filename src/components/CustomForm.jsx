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
  return (
    <form className="flex gap-2 text-base text-left" onSubmit={handleSubmit}>
        <div className="flex gap-2">
            <div className='flex flex-col'>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-white ">Typing</label>
            <input type="text"
            id="task"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 "
            value={task}
            onInput={(e)=> setTask(e.target.value)}
            required
            autoFocus
            maxLength={60} 
            placeholder="Enter task"
             />
             </div>
             <button className="flex items-center justify-center p-0.5 mb-2  text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500     " 
             aria-label="add task"
              type="submit"><PlusIcon  className='h-6 w-6 text-white'/></button>
        </div>
    </form>
  )
}
