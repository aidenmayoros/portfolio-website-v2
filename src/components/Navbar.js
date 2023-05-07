import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function StickyNav() {
	return (
		<Navbar collapseOnSelect expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>
					<img src={`${process.env.PUBLIC_URL}/assets/images/logo-small.png`} className='d-inline-block align-top' alt="Aiden's website logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse className='justify-content-end'>
					<Nav>
						<Nav.Link href='#about'>About</Nav.Link>
						<Nav.Link href='#work'>Work</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default StickyNav;
