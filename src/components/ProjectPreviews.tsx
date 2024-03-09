import { Box, Typography, Button, Chip } from '@mui/material';
import uniqid from 'uniqid';
import projects from '../projects';
console.log(projects);

function ProjectPreviews() {
	return (
		<Box sx={{ mt: 5, pt: 10 }}>
			<Typography variant='h4' color={'white'}>
				Projects
			</Typography>
			<Button variant='text' color='primary' sx={{ ml: '-6px' }}>
				View Full Project Archive
			</Button>

			<Box display={'flex'} flexDirection={'column'} mt={4}>
				{projects.map((project) => (
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
								maxWidth: '90%',
								gap: '16px',
								borderRadius: '8px',
								'&:hover': {
									backgroundColor: '#2dd4bf1a',
									cursor: 'pointer',
									transition: 'background-color 0.3s ease', // Add transition for background-color
								},
							}}>
							<Box width={125} height={65}>
								<img
									src={project.img}
									alt={project.projectName}
									width={100}
									height={65}
								/>
							</Box>
							<Box>
								<Typography color={'white'}>{project.projectName}</Typography>
								<Typography color={'white'} fontSize={15}>
									{project.smallDescription}
								</Typography>
								{project.technologiesUsed.map((projectName: string) => (
									<Chip
										key={uniqid()}
										label={projectName}
										variant='outlined'
										sx={{
											backgroundColor: '#2dd4bf1a',
											color: 'rgb(97, 234, 213)',
											marginRight: '8px',
											marginBottom: '8px',
										}}
									/>
								))}
							</Box>
						</Box>
					</a>
				))}
			</Box>
		</Box>
	);
}

export default ProjectPreviews;
