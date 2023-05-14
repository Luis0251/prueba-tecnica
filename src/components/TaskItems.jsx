import PropTypes from "prop-types";
import {PencilIcon,TrashIcon} from '@heroicons/react/24/solid'
import { useState } from "react";
export const TaskItems = ({task, deleteTask, ToggleTask,enterEditMode}) => {
 const [isChecked, setIsChecked] = useState(task.checked);
 const handleCheckboxChange = () =>{
  setIsChecked(!isChecked)
  ToggleTask(task.name)
 }
 const Delete = ()=>deleteTask(task.id);
 const EditMode = ()=>enterEditMode(task);
  return (
    <li className="flex justify-between gap-1 text-base border border-solid border-opacity-80 rounded-lg bg-white">
      <div className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3 gap-2">
        <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckboxChange}
        name={task.name}
        id={task.id}
        />
        <label className="text-black px-2.5" htmlFor={task.id}>
          {task.name}
        </label>
        <div className="">
          <button className="bg-blue-500 text-white p-1 rounded-md ml-2" aria-label={`Update ${task.name} task`}
          onClick={EditMode}
          ><PencilIcon width={15} height={15}/></button>
          <button className="bg-red-500 text-white p-1 rounded-md ml-2" aria-label={`Update ${task.name} task`}
          onClick={Delete}
          ><TrashIcon width={15} height={15}/></button>
        </div>
      </div>
    </li>
  )
}
TaskItems.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask:PropTypes.func.isRequired,
  ToggleTask:PropTypes.func.isRequired,
  enterEditMode:PropTypes.func.isRequired
};