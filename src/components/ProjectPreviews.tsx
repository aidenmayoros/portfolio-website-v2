import { Box, Typography, Button, Chip } from '@mui/material';
import uniqid from 'uniqid';
import projects from '../projects';
import { useNavigate } from 'react-router-dom';

function ProjectPreviews() {
	const navigate = useNavigate();

	const handleViewProjects = () => {
		navigate('/projects');
	};

	return (
		<Box pt={12} pr={4} pl={4}>
			<Typography variant='h4' color={'white'}>
				Projects
			</Typography>

			<Box display={'flex'} flexDirection={'column'} mt={4} gap={2}>
				{projects.slice(0, 5).map((project) => (
					<a
						href={project.appLink}
						key={uniqid()}
						style={{ textDecoration: 'none' }}
						target='_blank'
						rel='noopener noreferrer'>
						<Box
							key={uniqid()}
							p={2}
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', lg: 'row' },
								gap: '1em',
								borderRadius: '8px',
								'&:hover': {
									backgroundColor: '#2dd4bf1a',
									cursor: 'pointer',
									transition: 'background-color 0.3s ease',
								},
							}}>
							<Box display={'flex'}>
								<img
									src={project.img}
									alt={project.projectName}
									width={180}
									height={145}
								/>
							</Box>
							<Box display={'flex'} flexDirection={'column'} gap={2}>
								<Box>
									<Typography variant='h6' color={'white'}>
										{project.projectName}
									</Typography>
									<Typography color={'white'} fontSize={15}>
										{project.smallDescription}
									</Typography>
								</Box>
								<Box display={'flex'} flexWrap={'wrap'} gap={1.5}>
									{project.technologiesUsed.map((projectName: string) => (
										<Chip
											key={uniqid()}
											label={projectName}
											variant='outlined'
											sx={{
												backgroundColor: '#2dd4bf1a',
												color: 'rgb(97, 234, 213)',
											}}
										/>
									))}
								</Box>
							</Box>
						</Box>
					</a>
				))}
			</Box>
			<Button
				variant='outlined'
				color='primary'
				onClick={handleViewProjects}
				sx={{ ml: 2, mt: 2 }}>
				View Full Project Archive
			</Button>
		</Box>
	);
}

export default ProjectPreviews;
