import '../Styles/Appointments.css';

import { useState } from 'react';
// declaring intial form state to make it easier to update as well as reset form
const initialFormState = {
	firstName: '',
	lastName: '',
	email: '',
	number: '',
	groupSize: '',
	date: '',
};

const Appointments = () => {
	const [formData, setFormData] = useState({ ...initialFormState });

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	return (
		<main>
			<div className="form-box">
				<h2>Contact Me</h2>
				<form>
					<div className="full-name">
						<div>
							<label htmlFor="fname">First Name:</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								placeholder="First Name"
								value={formData.firstName}
								onChange={handleChange}
							/>
						</div>
						<div>
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
					</div>
					<div className="contact-info">
						<div>
							<label htmlFor="phone">Phone Number:</label>
							<input
								type="tel"
								id="phone"
								name="number"
								placeholder="Phone Number"
								value={formData.number}
								onChange={handleChange}
							/>
						</div>
						<div>
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
					</div>
					<div className="group-info">
						<div>
							<label htmlFor="date">Date:</label>
							<input
								type="date"
								id="date"
								name="date"
								value={formData.date}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="size">Party Size:</label>
							<input
								type="number"
								min={1}
								max={10}
								inputMode="numeric"
								id="size"
								name="groupSize"
								value={formData.groupSize}
								onChange={handleChange}
							/>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Appointments;
