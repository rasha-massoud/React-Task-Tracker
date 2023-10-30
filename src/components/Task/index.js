import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeTask, updateTaskReminder } from "../../store/slices/TaskSlice"

const Task = ({ task }) => {

    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(removeTask(id))
    }

    const toggleReminder = (id) => {
        dispatch(updateTaskReminder(id))
    }

    return (
        <div 
            className={`task ${task.reminder && 'reminder'}`}
            onDoubleClick={() => toggleReminder(task.id)}
        >
            <h3>
                {task.text}{' '}
                <FaTimes 
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;