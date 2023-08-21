import Room from './Room'
import Loading from './Loading'

const FilteredRooms = ({ searchTerm, rooms, availableRooms ,startDate,endDate}) => {
    
    if (!searchTerm) {
        // if no search term
        // if (rooms.length > 1) {
        //     const dateString = JSON.parse(rooms[0].fields.end);
        //     const dateObject = new Date(JSON.parse(rooms[0].fields.end));
        //     const timestamp = dateObject.getTime();
        //     console.log(timestamp)
        // }
        
        return (
            <div className="featured-rooms-center">
                {
                    Array.isArray(rooms) ?
                        (rooms.map((room) => {
                            if (availableRooms && room.fields.featured &&(startDate.getTime()>new Date(JSON.parse(room.fields.end)).getTime() || endDate.getTime()< new Date(JSON.parse(room.fields.start)).getTime())) {
                                //available Rooms check 
                                return <Room room={room} key={room.sys.id} />
                            } else if (!availableRooms &&(startDate.getTime()>new Date(JSON.parse(room.fields.end)).getTime() || endDate.getTime()<new Date(JSON.parse(room.fields.start)).getTime())) {
                                //all rooms
                                return <Room room={room} key={room.sys.id} />
                            }
                    }))
                    : <Loading />
                }
            </div>
        )
    } else {
        //if search term found
        return (
            <div className="featured-rooms-center">
                {
                    rooms.map((room) => {
                        if (availableRooms &&
                            room.fields.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                            room.fields.featured &&
                            (startDate.getTime() > new Date(JSON.parse(room.fields.end)).getTime() || endDate.getTime() < new Date(JSON.parse(room.fields.start)).getTime())) {
                        //check available and apply filter
                        return <Room room={room} key={room.sys.id} />
                        } else if (!availableRooms &&
                            room.fields.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                            (startDate.getTime() > new Date(JSON.parse(room.fields.end)).getTime() || endDate.getTime() < new Date(JSON.parse(room.fields.start)).getTime())
                        ) {
                            //apply filter only
                            return <Room room={room} key={room.sys.id} />
                        }
                    })
                }
            </div>
        )
    }

}

export default FilteredRooms