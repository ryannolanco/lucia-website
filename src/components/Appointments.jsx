import "../Styles/Appointments.css"

import { useState } from 'react';

const Appointments = () => {
	return (
		<>
			<h2>Contact Me</h2>
			<form>
				<div className="full-name">
					<label for="firstname">First Name:</label>
					<input type="text" id="firstname" placeholder="First Name" />
					<label for="lastname">Last Name:</label>
					<input type="text" id="lastname" placeholder="Last Name" />
				</div>
				<div className="contact-info">
					<label for="phone">Phone Number:</label>
					<input type="tel" id="phone" placeholder="Phone Number" />
					<label for="email">Email:</label>
					<input type="email" id="email" placeholder="Email" />
				</div>
			</form>
		</>
	);
};

export default Appointments;
