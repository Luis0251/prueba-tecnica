import {CheckIcon} from '@heroicons/react/24/solid'
import { useState } from 'react';
import PropTypes from "prop-types";

export const EditForm = ({editedTask, upDateTask}) => {
   
    const [upDateTaskName, setUpDateTaskName] = useState(editedTask.name)
    const handleSubmit = (e) =>{
        e.preventDefault();
       // upDateTask()
    }
  return (
    <div role='dialog' 
    aria-label='editTask'
    //onClick={}
    >
      <form className="flex gap-2 text-base text-left" onSubmit={handleSubmit}>
          <div className="flex gap-2">
              <div className='flex flex-col'>
              <label htmlFor="editTask" className="block mb-2 text-sm font-medium text-white ">Typing</label>
              <input type="text"
              id="editTask"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 "
              value={upDateTask}
              onInput={(e)=> setUpDateTaskName(e.target.value)}
              required
              autoFocus
              maxLength={60}
              placeholder="Update task"
               />
               </div>
               <button className="flex items-center justify-center p-0.5 mb-2  text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500     "
               aria-label={`Confirm Edited to task ${upDateTaskName}`}
                type="submit">
                <CheckIcon  strokewidth={2} height={12} width={12}/>
                </button>
          </div>
      </form>
    </div>
  )
}
EditForm.propTypes = {
  editedTask: PropTypes.object.isRequired,
  upDateTask:PropTypes.func.isRequired
}