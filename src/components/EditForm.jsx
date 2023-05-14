import {CheckIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import PropTypes from "prop-types";

export const EditForm = ({editedTask, upDateTask}) => {
   
    const [upDateTaskName, setUpDateTaskName] = useState(editedTask.name)
    const handleSubmit = (e) =>{
        e.preventDefault();
       // upDateTask()
    }
    const handleUpdateName = (e)=> setUpDateTaskName(e.target.value)
  return (
    <div role='dialog' 
    aria-labelledby='editTask'
    //onClick={}
    >
      <form className="p-3 flex" onSubmit={handleSubmit}>
            <div className='flex w-[90%]'>
            <input type="text"
            id="upDateTask"
            className="p-3 focus:outline-none border-slate-400 text-black w-full"
            value={upDateTask}
            onInput={handleUpdateName}
            required
            autoFocus
            maxLength={60} 
            placeholder="Update task"
             />
             </div>
             <button className="flex items-center text-white justify-center w-[50px] h-[50px] rounded-lg  bg-gradient-to-br from-purple-600 to-blue-500" 
             aria-label={`Confirm Edited to task ${upDateTaskName}`}
              type="submit"><CheckIcon  strokewidth={2} height={12} width={12}/></button>
    </form>
    </div>
  )
}
EditForm.propTypes = {
  editedTask: PropTypes.object.isRequired,
  upDateTask:PropTypes.func.isRequired
}