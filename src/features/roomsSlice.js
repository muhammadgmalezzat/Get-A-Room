import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rooms: [],
    featuredRooms: [],
    singleRoom:[]
};

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        setRooms: (state, action) => {
            state.rooms = action.payload;
        },
        setFeaturedRooms: (state, action) => {
            state.featuredRooms= action.payload;
        },
        setSingleRoom: (state, action) => { 
            state.singleRoom = action.payload;
        }
    },
});

export const { setRooms,setFeaturedRooms,setSingleRoom } = roomsSlice.actions;
export default roomsSlice.reducer;
