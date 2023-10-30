import Task from "../Task"
import { useSelector } from "react-redux"

const Tasks = () => {

    const tasks = useSelector((state) => state.tasks)

    return (
        <>
            {
                tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))
            }
        </>
    )
}

export default Tasks;