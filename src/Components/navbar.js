import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 

import '../App.scss'
const navbar = () => {
    return (
        
            
        <Navbar expand="lg" className=" navbar">
        <Container>
            <Navbar.Brand href="/" >
                <p className='logo m-auto'>GetARoom</p>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"  />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav-links link "
                        style={{ maxHeight: '150px' }}
                    >
                        <Link to="/" className='link'>Home</Link>
                        <Link to="/rooms" className='link'>Gooms</Link>
                        <a href='#services' className='link'>Services</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default navbar
