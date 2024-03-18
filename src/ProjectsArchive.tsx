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
		<Box>
			<Box pt={4} pl={2}>
				<IconButton onClick={() => handleBackButtonClick()}>
					<ArrowBack sx={{ color: '#2dd4bfcf' }} />
					<Typography color={'#2dd4bfcf'}>Aiden Mayoros</Typography>
				</IconButton>
				<Typography
					variant='h3'
					color={'white'}
					pt={1}
					sx={{ textAlign: { xs: 'left', md: 'center' } }}>
					All Projects
				</Typography>
			</Box>

			<Box
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				sx={{ p: 2 }}>
				<Table sx={{ maxWidth: { xs: '100vw', md: '35vw', lg: '25vw' } }}>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ color: 'white', borderBottom: '1px solid #cbd5e11a' }}>
								Year
							</TableCell>
							<TableCell
								sx={{ color: 'white', borderBottom: '1px solid #cbd5e11a' }}>
								Project Link
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{projects.map((project, index) => (
							<TableRow key={index}>
								<TableCell sx={{ borderBottom: '1px solid #cbd5e11a' }}>
									{project.year}
								</TableCell>
								<TableCell
									sx={{
										borderBottom: '1px solid #cbd5e11a',
									}}>
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
