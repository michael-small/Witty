import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import WorkshopHome from './components/WorkshopHome/WorkshopHome';
import Workshop from './components/WorkshopHome/Workshop/Workshop';
import BlogHome from './components/BlogHome/BlogHome';

function App() {
	return (
		<CssBaseline>
			<div className='App'>
				{' '}
				<BrowserRouter>
					<Navigation />
					<Route exact path='/' component={Home} />
					<Route exact path='/profile' component={Profile} />
					<Route exact path='/workshops' component={WorkshopHome} />
					<Route exact path='/workshop' component={Workshop} />
					<Route exact path='/blog' component={BlogHome} />
				</BrowserRouter>
			</div>
		</CssBaseline>
	);
}

export default App;
