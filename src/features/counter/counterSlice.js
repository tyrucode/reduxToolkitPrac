import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    // slices start with a name
    name: 'counter',
    //then initial state
    initialState,
    reducers: {
        //all of our different actions
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        double: (state) => {
            state.count = state.count + state.count;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
            // our action will be whatever payload is passed in
        }
    }
})

//must export BOTH our actions and our reducer 
export const { increment, decrement, reset, double, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;