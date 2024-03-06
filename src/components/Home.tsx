import { Grid } from '@mui/material';
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import '../App.css';

function Home() {
	return (
		<>
			<Grid
				container
				sx={{
					height: '100vh',
					backgroundColor: '#000f22',
				}}>
				<Grid item xs={6}>
					<LeftSide />
				</Grid>
				<Grid item xs={6}>
					<RightSide />
				</Grid>
			</Grid>
		</>
	);
}

export default Home;
