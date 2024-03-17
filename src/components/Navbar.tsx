import { Button, Box } from '@mui/material';

function Navbar() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Box className='navbar' display={'flex'} flexDirection={'column'} pt={3}>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('about')}
				sx={{ width: '150px', color: 'white', border: '1px solid white' }}>
				About
			</Button>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('projects')}
				sx={{
					width: '150px',
					mt: 2,
					color: 'white',
					border: '1px solid white',
				}}>
				Projects
			</Button>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('contact')}
				sx={{
					width: '150px',
					mt: 2,
					color: 'white',
					border: '1px solid white',
				}}>
				Contact
			</Button>
		</Box>
	);
}

export default Navbar;
