// LeftSide.tsx
import { Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AssignmentInd } from '@mui/icons-material';
import Navbar from './Navbar';

function LeftSide() {
	return (
		<Box
			sx={{
				height: '100vh',
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Box sx={{ pt: 15 }}>
				<Typography variant='h4'>Aiden Mayoros</Typography>
				<Typography variant='subtitle1'>Full Stack Web Developer</Typography>
			</Box>
			<Box>
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
