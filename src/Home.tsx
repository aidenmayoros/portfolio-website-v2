import { Box } from '@mui/material';
import RightSide from './components/RightSide';
import './App.css';
import LeftSide from './components/LeftSide';

function Home() {
	return (
		<Box>
			<LeftSide />
			<RightSide />
		</Box>
	);
}

export default Home;
