import React from 'react'
import {Link} from 'react-router-dom';
import DefaultImg from "../images/room-1.jpeg";

const Room = ({ room }) => {
    const { name, slug, images, price } = room.fields;
    return (
        <div>
            <article className="room">
                <div className="img-container">
                    <img src={images[0].fields.file.url || DefaultImg} alt="single room" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    {
                        room.fields.featured ? (
                            <div className="available-top">
                        <h6>Featured</h6>
                    </div>
                        ): <></>
                    }
                    <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                        features
                    </Link>
                </div>
                <p className="room-info">{name}</p>
            </article>
        </div>
    )
};

export default Room