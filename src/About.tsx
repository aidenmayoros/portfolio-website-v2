// About.tsx
import { Element } from 'react-scroll';
import { Typography, Box } from '@mui/material';

function About() {
	return (
		<Element name='about'>
			<Box sx={{ maxWidth: '80%' }}>
				<Typography variant='h5'>
					I'm a web developer with a background in customer service which helps
					me to make customer centered projects aimed at making simple and easy
					to use solutions to sometimes complex problems. I am currently
					available for full time, part time or freelance work.
				</Typography>
			</Box>
		</Element>
	);
}

export default About;
