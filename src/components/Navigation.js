import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from "../assets/img/logo1.png";
import github from "../assets/img/icons8-github-50.png";
import linkedin from "../assets/img/icons8-linkedin-circled-50.png";

export const NavBar = (props) => {
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
    console.log(props);
	}

  return (
    <Navbar bg="black" expand="lg" className={scrolled ? 'scrolled': ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='logo' id='custom-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-light bg-white'>
            <span className='navbar-toggler-icon navbar-light bg-white'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1WUXm5xok64CXN4Zd2e7mTmLApVYmzgA4/view?usp=share_link" target="_blank" className={activeLink === 'resume' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/jesse-barnett-b264b4263/"><img src={linkedin} alt="linkedin" id='linkedin'/></a>
                <a href="https://github.com/biscuit231"><img src={github} alt="github" id='github'/></a>
            </div>
            <button href="#contact" className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                <span>Contact Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
