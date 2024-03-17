import { Box, Grid } from '@mui/material';
import RightSide from './components/RightSide';
import './App.css';
import LeftSide from './components/LeftSide';

function Home() {
	return (
		<Box id='home-page'>
			<Grid container>
				<Grid item xs={12} lg={6}>
					<LeftSide />
				</Grid>
				<Grid item xs={12} lg={6}>
					<RightSide />
				</Grid>
			</Grid>
		</Box>
	);
}

export default Home;
