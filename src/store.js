import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './features/roomsSlice';
//import { getDefaultMiddleware } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        
    },
});

export default store;
