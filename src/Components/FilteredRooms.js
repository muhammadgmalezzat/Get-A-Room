import Room from './Room'
import Loading from './Loading'

const FilteredRooms = ({ searchTerm, rooms, availableRooms ,startDate,endDate}) => {
    
    if (!searchTerm) {
        return (
            <div className="featured-rooms-center">
                {
                    Array.isArray(rooms) ?
                        // eslint-disable-next-line
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
                {// eslint-disable-next-line
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