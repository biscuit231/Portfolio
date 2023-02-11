import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
	
	useEffect(() => {
		const onScroll = () => {
				if (window.scrollY > 50) {
					setScrolled(true);
				} else {
					setScrolled(false);
				}
		}

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	}

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? 'scrolled': ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={""} alt=''/></a>
                <a href='#'><img src={""} alt=''/></a>
                <a href='#'><img src={""} alt=''/></a>
            </div>
            <button className='vvd' onClick={() => console.log('contact me')}>
                <span>Contact Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
