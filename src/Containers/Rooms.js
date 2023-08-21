import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms ,clearSingleRoom} from '../actions/roomActions';
import { useEffect,useState } from 'react';
import FilteredRooms from '../Components/FilteredRooms';
import Search from '../Components/Search';
import Services from '../Components/Services';

const Rooms = () => {
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.rooms);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState(new Date("2023/08/01"));
    const [endDate, setEndDate] = useState(new Date("2023/08/10"));
    const [availableRooms, setAvailableRooms] = useState(false);

    const availableRoomsHandle = () => {
        setAvailableRooms(!availableRooms);
    }
    useEffect(() => {
        dispatch(fetchRooms());
        dispatch(clearSingleRoom());
    }, [dispatch]);
    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    };
    
    return (
        <>
        <div className='rooms'>
            <Hero hero="defaultHero">
                <Banner
                    title="Get A Room"
                    subtitle="Serving Awesome Rooms "
                >
                    <Link to="/" className="btn-primary">
                        Return to Home
                    </Link>
                </Banner>
            </Hero>
            <div className='featured-rooms'>
                    <div className="section-title">
                        <h4>All Rooms</h4>
                    <div />
                </div>
                </div>

                <Search
                    handleSearchChange={handleSearchChange}
                    searchTerm={searchTerm}
                    availableRoomsHandle={availableRoomsHandle}
                    availableRooms={availableRooms}
                    startDate={startDate}
                    endDate={endDate}
                    handleStartChange={(date) => setStartDate(date)}
                    handleEndChange={(date) => setEndDate(date)}
                />
                <FilteredRooms
                    searchTerm={searchTerm}
                    rooms={rooms}
                    availableRooms={availableRooms}
                    startDate={startDate}
                    endDate={endDate}
            />
        </div>
        <Services/>
        
        </>
        

    )
};

export default Rooms