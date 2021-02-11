import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<Route exact path='/' component={Home} />
				<Route exact path='/profile' component={Profile} />
			</BrowserRouter>
		</div>
	);
}

export default App;
