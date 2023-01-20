import logo from '../assets/images/react.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<NavLink to="/" className="navbar-brand">
					<img className="App-logo" src={logo} alt="logo" width="80" />
				</NavLink>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink to="score" className="nav-link">
							Score
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
