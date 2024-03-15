// RightSide.jsx
import { Box } from '@mui/material';
import About from './About';
import ProjectPreviews from './ProjectPreviews';
import ContactForm from './ContactForm';

function RightSide() {
	return (
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
	);
}

export default RightSide;
