import '../Styles/Header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<h1>Bolivian Botox</h1>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/appointments">Appointment</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
