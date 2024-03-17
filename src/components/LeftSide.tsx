// LeftSide.jsx
import { Typography, Box, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AssignmentInd } from '@mui/icons-material';
import Navbar from './Navbar';

function LeftSide() {
	interface TooltippedIconButtonProps {
		href: string;
		tooltipContent: JSX.Element;
		icon: JSX.Element;
	}

	function TooltippedIconButton({
		href,
		tooltipContent,
		icon,
	}: TooltippedIconButtonProps) {
		return (
			<Tooltip title={tooltipContent} followCursor={true}>
				<IconButton href={href}>{icon}</IconButton>
			</Tooltip>
		);
	}

	return (
		<Box
			id='background-image'
			pl={8}
			sx={{
				height: { xs: 'auto', lg: '100vh' },
				position: { xs: 'static', lg: 'fixed' },
			}}>
			<Box display={'flex'} flexDirection={'column'} color={'white'} pt={15}>
				<Typography variant='h4' fontWeight={600}>
					Aiden Mayoros
				</Typography>
				<Typography variant='subtitle1' fontWeight={600}>
					Full Stack Web Developer
				</Typography>
				<Box>
					<Navbar />
				</Box>
			</Box>
			<Box pt={5}>
				<Box display={'flex'}>
					<TooltippedIconButton
						href='https://github.com/aidenmayoros'
						tooltipContent={
							<img
								src={'/github-preview-img.png'}
								alt='GitHub'
								style={{ width: '200px', height: '200px' }}
							/>
						} // Insert your image JSX here
						icon={<GitHubIcon />}
					/>
					<TooltippedIconButton
						href='https://www.linkedin.com/in/aiden-mayoros/'
						tooltipContent={
							<img
								src={'/linkedin-preview-img.png'}
								alt='LinkedIn'
								style={{ width: '200px', height: '200px' }}
							/>
						} // Insert your image JSX here
						icon={<LinkedInIcon />}
					/>
					<TooltippedIconButton
						href='/AidenResume.pdf'
						tooltipContent={
							<img
								src={'/resume-preview-img.png'}
								alt='Resume'
								style={{ width: '200px', height: '200px' }}
							/>
						} // Insert your image JSX here
						icon={<AssignmentInd />}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default LeftSide;
