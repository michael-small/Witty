import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
	return (
		<CssBaseline>
			<div className='App'>
				{' '}
				<BrowserRouter>
					<Navigation />
					<Route exact path='/' component={Home} />
					<Route exact path='/profile' component={Profile} />
				</BrowserRouter>
			</div>
		</CssBaseline>
	);
}

export default App;
