import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import WorkshopHome from './components/WorkshopHome/WorkshopHome';
import Workshop from './components/WorkshopHome/Workshop/Workshop';
import BlogHome from './components/BlogHome/BlogHome';
import DEMO_COCKPIT from './components/DEMO_COMPONENTS/DEMO_COCKPIT';

// Will refine later, this is for the sake of desktop right now
const theme = createMuiTheme({
	breakpoints: {
		values: {
			elev_thous: 1100,
		},
	},
});

function App() {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<div className='App'>
					{' '}
					<BrowserRouter>
						<Navigation />
						<Route exact path='/' component={Home} />
						<Route exact path='/profile' component={Profile} />
						<Route
							exact
							path='/workshops'
							component={WorkshopHome}
						/>
						<Route exact path='/workshop' component={Workshop} />
						<Route exact path='/blog' component={BlogHome} />
						<Route path='/workshop/:id' component={Workshop} />
						<Route path='/demo' component={DEMO_COCKPIT} />
					</BrowserRouter>
				</div>
			</ThemeProvider>
		</CssBaseline>
	);
}

export default App;
