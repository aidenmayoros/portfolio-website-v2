// About.tsx
import { Element } from 'react-scroll';
import { Typography, Box } from '@mui/material';
import Skills from './components/Skills';

function About() {
	return (
		<Element name='about'>
			<Box sx={{ maxWidth: '80%' }}>
				<Typography sx={{ fontSize: '16px' }}>
					Back in 2019, I found a desire and passion for coding. I really
					enjoyed being able to solve complex problems and build something
					others would enjoy.
				</Typography>
				<br></br>
				<Typography sx={{ fontSize: '16px' }}>
					I first started my programming journey with website development and it
					was a perfect fit. As a dedicated CareerFoundry graduate with a deep
					passion for continued learning I love supporting my team members in
					achieving our shared professional goals.
				</Typography>
				<br></br>
				<Typography sx={{ fontSize: '16px' }}>
					My focus now is to continuously upgrade my skills and understanding.
				</Typography>
				<Box sx={{ mt: 5 }}>
					<Skills />
				</Box>
			</Box>
		</Element>
	);
}

export default About;
