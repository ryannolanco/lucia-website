import '../Styles/Appointments.css';

import { useState } from 'react';
// declaring intial form state to make it easier to update as well as reset form
const initialFormState = {
	firstName: '',
	lastName: '',
	email: '',
	number: '',
	groupSize: '',
};

const Appointments = () => {
	const [formData, setFormData] = useState({ ...initialFormState });
	


	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	return (
		<>
			<h2>Contact Me</h2>
			<form>
				<div className="full-name">
					<label htmlFor="fname">First Name:</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						placeholder="First Name"
						value={formData.firstName}
						onChange={handleChange}
					/>
					<label htmlFor="lname">Last Name:</label>
					<input
						type="text"
						id="lname"
						name="lastName"
						placeholder="Last Name"
						value={formData.lastName}
						onChange={handleChange}
					/>
				</div>
				<div className="contact-info">
					<label htmlFor="phone">Phone Number:</label>
					<input
						type="tel"
						id="phone"
						name="number"
						placeholder="Phone Number"
						value={formData.number}
						onChange={handleChange}
					/>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className="group-info">
					<label htmlFor="size">Party Size</label>
					<input
						type="text"
						id="size"
						name="groupSize"
						value={formData.groupSize}
						onChange={handleChange}
					/>
				</div>
			</form>
		</>
	);
};

export default Appointments;
