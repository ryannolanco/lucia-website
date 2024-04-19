import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="homepage">
			<h1>Hello</h1>

		<Link to="/appointments">Set up an appointment</Link>
		</div>
	);
};

export default HomePage;
