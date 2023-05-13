import { TaskItems } from "./TaskItems"
import PropTypes from "prop-types";

export const TaskList = ({tasks}) => {
  return (
    <ul className="">
        {
          tasks.map(task =>(
            <TaskItems 
            key={task.id}
            task={task}
            />
          ))
        }
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};