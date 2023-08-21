import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = ({ handleSearchChange, searchTerm, availableRooms, availableRoomsHandle,startDate,endDate,handleStartChange,handleEndChange }) => {

    return (
        <div className="search-container">
            <input
                className='search-input'
                type="text"
                placeholder="Search Cites..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className='calenderbox'>
                <div className='datebox'>
                    <p className='text'>Check in</p>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => handleStartChange(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        showIcon
                    />
                </div>
                <div className='datebox'>
                    <p className='text'>Check out</p>
                    <DatePicker
                        showIcon
                        selected={endDate}
                        onChange={(date) => handleEndChange(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        
                    />
                </div>
            </div>
            <div className='available'>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Featured"
                    onChange={availableRoomsHandle}
                    value={availableRooms}
                />
            </div>
        </div>
    )
};

export default Search