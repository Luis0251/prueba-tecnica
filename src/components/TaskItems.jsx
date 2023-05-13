import PropTypes from "prop-types";
export const TaskItems = ({task}) => {
 
  return (
    <div>{task.name}</div>
  )
}
TaskItems.propTypes = {
  task: PropTypes.array.isRequired,
};