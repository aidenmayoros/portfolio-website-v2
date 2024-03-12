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
			<Button
				variant='outlined'
				onClick={() => scrollToSection('about')}
				sx={{ mt: 8, width: '150px' }}>
				About
			</Button>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('projects')}
				sx={{ width: '150px', mt: 2 }}>
				Projects
			</Button>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('contact')}
				sx={{ width: '150px', mt: 2 }}>
				Contact
			</Button>
		</Box>
	);
}

export default Navbar;
