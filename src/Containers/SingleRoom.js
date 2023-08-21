import React from 'react'
import { useEffect } from 'react';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchSingleRoom } from '../actions/roomActions';
import Loading from "../Components/Loading";
import SingleRoomHero from '../Components/SingleRoomHero';

const SingleRoom = () => {
    const dispatch = useDispatch();
    const room = useSelector((state) => state.rooms.singleRoom);
    const { slug } = useParams();
    
    useEffect(() => {
        dispatch(fetchSingleRoom(slug));
    }, [dispatch,slug]);

    if (room.length === 0) {
        return (
            <div className="error">
                <h3> no such room could be found 😧</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        );
    }

    return (
        <div>
            
            {
                room.length === 1 ?
                    (
                        <>
                            <SingleRoomHero imageUrl={room[0].fields.images[0].fields.file.url}>
                                <Banner
                                    title={room[0].fields.name}
                                    subtitle="Back to Rooms "
                                >
                                    <Link to="/rooms" className="btn-primary">
                                        our rooms
                                    </Link>
                                </Banner>
                            </SingleRoomHero>
                            <section className="single-room">
                                <div className="single-room-images">
                                    {room[0].fields.images.map((item, index) => (
                                        <img key={index} src={item.fields.file.url} alt={room[0].fields.name} />
                                    ))}
                                </div>
                                <div className="single-room-info">
                                    <article className="desc">
                                        <h3>details</h3>
                                        <p>{room[0].fields.description}</p>
                                    </article>
                                    <article className="info">
                                        <h3>info</h3>
                                        <h6>price : ${room[0].fields.price}</h6>
                                        <h6>size : {room[0].fields.size} SQFT</h6>
                                        <h6>
                                            max capacity :
                                            {room[0].fields.capacity > 1 ? `${room[0].fields.capacity} people` : `${room[0].fields.capacity} person`}
                                        </h6>
                                        <h6>{room[0].fields.pets ? "pets allowed" : "no pets allowed"}</h6>
                                        <h6>{room[0].fields.breakfast && "free breakfast included"}</h6>
                                    </article>
                                </div>
                                <section className="room-extras">
                                    <h6>Extras </h6>
                                    <ol className="extras">
                                        {room[0].fields.extras.map((item, index) => (
                                            <li key={index}> {item}</li>
                                        ))}
                                    </ol>
                                </section>
                            </section>
                        </>
                    ) : <Loading />
            }
        </div>
    )
};

export default SingleRoom