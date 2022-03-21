import React from "react";
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Button,
	Typography,
	Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


function Register() {
	const paperStyleB = {
		padding: "30px 20px",
		width: 280,
		margin: "20px auto",
	};
	const avatarStyle = { backgroundColor: "#121212" };
	const headeStyle={margin:2}
	const btnStyle = { margin: "9px 0", backgroundColor: "#121212" };

	return (
		<Grid>
			<Paper elevation={20} style={paperStyleB}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<AccountCircleIcon />
					</Avatar>
					<h2 style={headeStyle}>Register</h2>
					<Typography variant="caption">
						Please fill this form to create an account!{" "}
					</Typography>
				</Grid>
				<form>
					<TextField
						label="Name"
						placeholder="Enter your name"
						fullWidth
						required
						variant="standard"
					/>
					<TextField
						label="Email"
						placeholder="Enter email"
						fullWidth
						required
						variant="standard"
					/>
					<TextField
						label="Password"
						placeholder="Enter password"
						fullWidth
						required
						variant="standard"
					/>
					<TextField
						label="Confirm Password"
						placeholder="Enter password"
						fullWidth
						required
						variant="standard"
					/>
					<Button
					type="submit"
					color="primary"
					variant="contained"
					style={btnStyle}
					fullWidth>
					Sign Up{" "}
				</Button>
				</form>
			</Paper>
		</Grid>
	);
}

export default Register;
