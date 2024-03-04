// RightSide.tsx
import { Grid, Box } from '@mui/material';
import About from '../About';
import ProjectPreviews from './ProjectPreviews';
import ContactForm from './ContactForm';

function RightSide() {
	return (
		<Grid
			container
			direction='column'
			sx={{ pt: 4, maxHeight: '100vh', overflowY: 'auto' }}>
			<Grid item>
				<Box>
					<Box id='about' className='section' sx={{ pt: 15 }}>
						<About />
					</Box>
					<Box id='projects' className='section'>
						<ProjectPreviews />
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
