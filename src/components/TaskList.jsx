import { TaskItems } from "./TaskItems"
import PropTypes from "prop-types";

export const TaskList = ({tasks, deleteTask, ToggleTask,enterEditMode}) => {
  return (
    <ul className="flex flex-col gap-3 px-2">
        {
          tasks.sort((a,b)=>b.id - a.id).map(task =>(
            <TaskItems 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            ToggleTask={ToggleTask}
            enterEditMode={enterEditMode}
            />
          ))
        }
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask:PropTypes.func.isRequired,
  ToggleTask:PropTypes.func.isRequired,
  enterEditMode:PropTypes.func.isRequired
};