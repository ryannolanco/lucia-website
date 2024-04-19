import '../Styles/Header.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<h1>Bolivian Botox</h1>
			<div style={{display: "flex", padding: "2px", gap: "2px"}}>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/appointments">Appointment</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
