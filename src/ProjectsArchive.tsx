import { Box, Typography, IconButton } from '@mui/material';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import projects from './projects';

function ProjectsArchive() {
	const navigate = useNavigate();

	const handleBackButtonClick = () => {
		navigate('/');
	};

	return (
		<Box id='projects'>
			<Box pt={4} pl={2}>
				<IconButton sx={{ p: 0 }} onClick={() => handleBackButtonClick()}>
					<ArrowBack sx={{ color: '#2dd4bfcf' }} />
					<Typography color={'#2dd4bfcf'}>Aiden Mayoros</Typography>
				</IconButton>
				<Typography variant='h4' color={'white'} pt={1}>
					All Projects
				</Typography>
			</Box>

			<Box sx={{ p: 2 }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ color: 'white', borderBottom: '1px solid #cbd5e11a' }}>
								Year
							</TableCell>
							<TableCell
								sx={{ color: 'white', borderBottom: '1px solid #cbd5e11a' }}>
								Project
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{projects.map((project, index) => (
							<TableRow key={index}>
								<TableCell sx={{ borderBottom: '1px solid #cbd5e11a' }}>
									{project.year}
								</TableCell>
								<TableCell sx={{ borderBottom: '1px solid #cbd5e11a' }}>
									<Link
										href={project.appLink}
										underline='hover'
										color={'#2dd4bfcf'}>
										{project.projectName}
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Box>
		</Box>
	);
}

export default ProjectsArchive;
