import Task from "../Task"
import { useSelector } from "react-redux"

const Tasks = ({ tasks, onDelete }) => {

    const tasks = useSelector((state) => state.tasks)

    console.log(tasks)
    return (
        <>
            {
                tasks.map((task, index) => (
                    <Task key={index} task={task} onDelete={onDelete} />
                ))
            }
        </>
    )
}

export default Tasks;