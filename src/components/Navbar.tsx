// Navbar.tsx
import { Button, Box } from '@mui/material';

function Navbar() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Box className='navbar' sx={{ display: 'flex', flexDirection: 'column' }}>
			<Button onClick={() => scrollToSection('about')}>About</Button>
			<Button onClick={() => scrollToSection('projects')}>Projects</Button>
			<Button onClick={() => scrollToSection('contact')}>Contact</Button>
		</Box>
	);
}

export default Navbar;
