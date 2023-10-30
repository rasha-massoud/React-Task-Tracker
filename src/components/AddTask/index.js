import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../../store/slices/TaskSlice"

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const dispatch = useDispatch()

    const TextChanged = (e) => {
        setText(e.target.value)
    }

    const DayChanged = (e) => {
        setDay(e.target.value)
    }

    const ReminderChecked = (e) => {
        setReminder(e.currentTarget.checked)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }
        else if (!day) {
            alert('Please add a day and time')
            return
        }

        dispatch(addTask({
            text, day, reminder
        }))

        setText("")
        setDay("")
        setReminder("")
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={TextChanged}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={DayChanged}
                />
            </div>
            <div className="form-control-check">
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={ReminderChecked}
                    />
                <label>Set Reminder</label>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask;