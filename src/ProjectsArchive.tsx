import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProjectsArchive() {
	const navigate = useNavigate();

	const handleBackButtonClick = () => {
		navigate('/');
	};

	return (
		<Box id='projects'>
			<h1>Projects Page</h1>
			<Button onClick={() => handleBackButtonClick()}>Back</Button>
		</Box>
	);
}

export default ProjectsArchive;
