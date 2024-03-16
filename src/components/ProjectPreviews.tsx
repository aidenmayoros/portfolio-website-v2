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
		<Box pl={3} pt={12}>
			<Typography variant='h4' color={'white'}>
				Projects
			</Typography>

			<Box display={'flex'} flexDirection={'column'} mt={4}>
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
								flexDirection: { xs: 'column' },
								gap: '16px',
								borderRadius: '8px',
								'&:hover': {
									backgroundColor: '#2dd4bf1a',
									cursor: 'pointer',
									transition: 'background-color 0.3s ease', // Add transition for background-color
								},
							}}>
							<Box display={'flex'} sx={{ justifyContent: { xs: 'center' } }}>
								<img
									src={project.img}
									alt={project.projectName}
									width={200}
									height={165}
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
				sx={{ ml: 2 }}>
				View Full Project Archive
			</Button>
		</Box>
	);
}

export default ProjectPreviews;
