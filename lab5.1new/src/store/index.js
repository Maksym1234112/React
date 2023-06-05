import { configureStore } from '@reduxjs/toolkit'
import Slice from './reducers/counterReducer'

const store = configureStore({
    reducer: {
        counter: Slice,
    }
})
export default store;