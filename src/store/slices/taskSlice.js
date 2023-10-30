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
            state.tasks.push(todo)
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        }        
    }
})

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;