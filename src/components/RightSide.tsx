// RightSide.tsx
import { Grid, Box } from '@mui/material';
import About from '../About';
import Projects from '../Projects';
import ContactForm from './ContactForm';

function RightSide() {
	return (
		<Grid
			container
			direction='column'
			sx={{ p: 2, maxHeight: '100vh', overflowY: 'auto' }}>
			<Grid item>
				<Box>
					<Box id='about' className='section' sx={{ pt: 15 }}>
						<About />
					</Box>
					<Box id='projects' className='section'>
						<Projects />
					</Box>
					<Box id='contact' className='section'>
						<ContactForm />
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}

export default RightSide;
