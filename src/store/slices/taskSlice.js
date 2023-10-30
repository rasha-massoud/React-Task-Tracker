import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
}

export const taskSlice = createSlice ({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: nanoid(),
                text: action.payload.text,
                day: action.payload.day,
                reminder: action.payload.reminder
            }
            state.tasks.push(task)
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateTaskReminder: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                  return { ...task, reminder: !task.reminder };
                }
                return task;
            })
        }
    }
})

export const { addTask, removeTask, updateTaskReminder } = taskSlice.actions;

export default taskSlice.reducer;