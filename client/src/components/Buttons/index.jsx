import React from "react";
import { useNavigate } from "react-router";

// import { Plus } from "react-feather";
import "./style.scss";

export default function Buttons() {
	let navigate = useNavigate();

	let redirectLogin = () => {
		navigate("/login");
	};

	let redirectRegister = () => {
		navigate("/register");
	};

	return (
		<>
			<button
				type="button"
				className="trackerButton"
				onClick={() => redirectLogin()}>
				<span>LOGIN</span>
				{/* <Plus/> */}
			</button>

			<button
				type="button"
				className="trackerButton2"
				onClick={() => redirectRegister()}>
				<span>REGISTER</span>
			</button>
		</>
	);
}


