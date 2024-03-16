// LeftSide.jsx
import { Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AssignmentInd } from '@mui/icons-material';
import Navbar from './Navbar';

function LeftSide() {
	return (
		<Box id='background-image' pl={4}>
			<Box display={'flex'} flexDirection={'column'} color={'white'} pt={5}>
				<Typography variant='h4' fontWeight={600}>
					Aiden Mayoros
				</Typography>
				<Typography variant='subtitle1' fontWeight={600}>
					Full Stack Web Developer
				</Typography>
				<Box sx={{ display: { xs: 'none', md: 'block' } }}>
					<Navbar />
				</Box>
			</Box>
			<Box pt={5}>
				<Box display={'flex'}>
					<IconButton href='https://github.com/aidenmayoros'>
						<GitHubIcon />
					</IconButton>
					<IconButton href='https://www.linkedin.com/in/aiden-mayoros/'>
						<LinkedInIcon />
					</IconButton>
					<IconButton href='/AidenResume.pdf' download>
						<AssignmentInd />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
}

export default LeftSide;
