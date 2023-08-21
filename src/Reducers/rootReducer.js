import { createSlice } from '@reduxjs/toolkit'

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
    },
});
export const { increment, decrement } = roomsSlice.actions
export default roomsSlice.reducer