import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../Components/FeaturedRooms';
import Services from '../Components/Services';

const Home = () => {
    
    
    return (
        <div>
            <Hero hero="defaultHero" >
                <Banner
                    title="Get A Room"
                    subtitle="Serving Awesome Rooms "
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            
            <FeaturedRooms />
            <Services/>
        </div>
    )
};

export default Home