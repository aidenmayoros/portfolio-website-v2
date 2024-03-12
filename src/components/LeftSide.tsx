import { Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AssignmentInd } from '@mui/icons-material';
import Navbar from './Navbar';

function LeftSide() {
	return (
		<Box
			id='background-image'
			sx={{
				height: '100vh',
				pt: 3,
				pb: 20,
				pl: 10,
				pr: 10,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}>
			<Box sx={{ pt: 15, color: 'white' }}>
				<Typography variant='h4'>Aiden Mayoros</Typography>
				<Typography variant='subtitle1'>Full Stack Web Developer</Typography>
				<Navbar />
			</Box>
			<Box sx={{ mt: 'auto' }}>
				{/* Social media links */}
				<IconButton>
					<GitHubIcon />
				</IconButton>
				<IconButton>
					<LinkedInIcon />
				</IconButton>
				{/* Portfolio download link */}
				<IconButton>
					<AssignmentInd />
				</IconButton>
			</Box>
		</Box>
	);
}

export default LeftSide;
