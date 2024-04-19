import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import Appointments from './Appointments';

const AllRoutes = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/appointments" element={<Appointments />} />
			</Routes>
		</>
	);
};

export default AllRoutes;
