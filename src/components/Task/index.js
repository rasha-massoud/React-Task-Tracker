import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeTask } from "../../store/slices/TaskSlice"

const Task = ({ task }) => {

    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(removeTask(id))
    }

    return (
        <div className={`task ${task.reminder && 'reminder'}`}>
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