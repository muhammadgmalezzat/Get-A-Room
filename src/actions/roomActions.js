import { setRooms ,setFeaturedRooms ,setSingleRoom} from '../features/roomsSlice';
import Data from '../data';
// Fetch rooms data from  source
export const fetchRooms = () => (dispatch) => {
    try {
        //console.log(Data);
        dispatch(setRooms([...Data]));

    } catch (error) {
        console.error('Error fetching rooms:', error);
    }
};
export const fetchFeturedRooms = () => (dispatch) => {
    try {
        //console.log(Data);
        const feturedRooms = Data.filter((room) => {
        return room.fields.featured 
    })
        dispatch(setFeaturedRooms([...feturedRooms]));
    } catch (error) {
        console.error('Error fetching fetured rooms:', error);
    }
};
export const fetchSingleRoom = (slug) => (dispatch) => {
    try {
        //console.log(Data);
        const singleRoom = Data.filter((room) => {
        return room.fields.slug === slug 
    })
        dispatch(setSingleRoom([...singleRoom]));
    } catch (error) {
        console.error('Error fetching fetured rooms:', error);
    }
};
export const clearSingleRoom = () => (dispatch) => {
    try {
        
        dispatch(setSingleRoom([]));
    } catch (error) {
        console.error('Error fetching fetured rooms:', error);
    }
};