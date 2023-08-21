
import Room from './Room';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchFeturedRooms,clearSingleRoom } from '../actions/roomActions';
import Loading from "./Loading";

const FeaturedRooms = () => {
    const dispatch = useDispatch();
    const feturedRooms = useSelector((state) => state.rooms.featuredRooms);


    useEffect(() => {
        dispatch(fetchFeturedRooms());
        dispatch(clearSingleRoom());
    }, [dispatch]);

    

    return (
        <div className='featured-rooms'>
            <div className="section-title">
                <h4>Featured Rooms</h4>
                <div />
            </div>
            <div className="featured-rooms-center">
                {
                    Array.isArray(feturedRooms) ?
                    (feturedRooms.map((room) => {
                        return <Room room={room} key={room.sys.id} />
                    }))
                    : <Loading />
                }
                
            </div>
            
        </div>
        
    )
};

export default FeaturedRooms