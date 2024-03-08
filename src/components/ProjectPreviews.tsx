import { Box, Typography, Button, Chip } from '@mui/material';
import uniqid from 'uniqid';
import projects from '../projects';
console.log(projects);

function ProjectPreviews() {
	return (
		<Box sx={{ mt: 5 }}>
			<Typography variant='h4' color={'white'}>
				Projects
			</Typography>
			<Button variant='text' color='primary' sx={{ ml: '-6px' }}>
				View Full Project Archive
			</Button>
			<Box display={'flex'} mt={4}>
				{projects.map((project) => (
					<Box key={uniqid()} sx={{ display: 'flex', gap: '16px' }}>
						<img src={project.img} alt={project.projectName} width={'125px'} />
						<Box>
							<Typography color={'white'}>{project.projectName}</Typography>
							<Typography fontSize={15}>Small Description</Typography>
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
				))}
			</Box>
		</Box>
	);
}

export default ProjectPreviews;
