// App.tsx
import { Grid } from '@mui/material';
import RightSide from './components/RightSide';
import LeftSide from './components/LeftSide';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Grid
					container
					sx={{
						height: '100vh',
						backgroundColor: '#0C1224',
					}}>
					<Grid item xs={6}>
						<LeftSide />
					</Grid>
					<Grid item xs={6}>
						<RightSide />
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	);
}

export default App;
