import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../assets/Ragul.png'
import Link from 'react-router-dom'
import '../App.css'

const TopNavbar = () => {
    return (
        <>
            <section>
                <div className='navbar'>
                    {/* <Navbar>
                        <Container >
                            <Navbar.Brand href="#home"><img className='Nav-image' src='./src/assets/logo.jpg' /></Navbar.Brand>
                            <div className="nav-item">
                                <a className='active1' >Home</a>
                                <a className='nav-link' >About</a>
                                <a className='nav-link' >PersonalSkills</a>
                                <a className='nav-link' >Projects</a>
                            </div>
                        </Container>
                    </Navbar> */}

                    {/* <div className='row banner'>
                        <div className='col-md-6'>
                            <h1>Let's Get Connected</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus distinctio labore vero provident? Voluptate <br />natus eum placeat necessitatibus sunt earum cum, tenetur illo doloremque ducimus voluptas ipsa officiis totam excepturi.</p>
                        </div>
                        <div className='colo-md-6'>
                            <img className='image-ragul' src='./src/assets/Ragul.jpg' alt="image" />
                        </div>
                    </div> */}

                    <Container className='banner'>
                        <Row>
                            <Col>
                                <h1>Let's Get Connected</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus distinctio labore vero provident? Voluptatenatus eum placeat necessitatibus sunt earum cum, tenetur illo doloremque ducimus voluptas ipsa officiis totam excepturi.</p>
                                <a className='btn'>Explore More</a>
                                <a className='btn' href=''>LinkedIn</a>
                            </Col>
                            <Col>
                                <Link to={image1}></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </section>
        </>
    )
}

export default TopNavbar;