import { configureStore } from "@reduxjs/toolkit";
// import counter reducer
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        // basically saying, we are going to be using counterReducer logic on this, we can add
        //comments and put even more slices though if we wanted to. 
        counter: counterReducer
    }
})