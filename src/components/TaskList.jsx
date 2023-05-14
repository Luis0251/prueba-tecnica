import { TaskItems } from "./TaskItems"
import PropTypes from "prop-types";

export const TaskList = ({tasks, deleteTask, ToggleTask}) => {
  return (
    <ul className="flex flex-col gap-3">
        {
          tasks.sort((a,b)=>b.id - a.id).map(task =>(
            <TaskItems 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            ToggleTask={ToggleTask}
            />
          ))
        }
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask:PropTypes.func.isRequired,
  ToggleTask:PropTypes.func.isRequired
};