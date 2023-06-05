import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 20,
    lesson: {
        lection: 10,
        topic: 'Redux Toolkit'
    },
    users: []
}

const Slice = createSlice({
    name: "Redux",
    initialState,
    reducers: {
        increase: (state, action) => {
            state.counter = state.counter + action.payload
        },
        decrease: (state, action) => {
            state.counter = state.counter - action.payload
        },
        add_user: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        add_users: (state, action) => {
            state.users = [...state.users, ...action.payload]
        },
        remove_user: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    }
})

export const { increase, decrease, add_user, add_users, remove_user } = Slice.actions;
export default Slice.reducer