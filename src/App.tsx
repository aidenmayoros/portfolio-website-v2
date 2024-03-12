import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProjectsArchive from './ProjectsArchive';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		text: {
			primary: 'rgb(176, 169, 159)',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif', // Set the font family
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					border: '2px solid rgb(97, 234, 213)',
					color: 'rgb(97, 234, 213)',
				},
				outlined: {
					borderColor: 'rgb(97, 234, 213)',
					color: 'rgb(97, 234, 213)',
				},
			},
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects' element={<ProjectsArchive />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
