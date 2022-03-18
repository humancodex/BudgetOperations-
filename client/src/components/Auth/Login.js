import React from "react";
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Typography,
	Link,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
	const paperStyle = {
		padding: 25,
		height: "60vh",
		width: 280,
		margin: "20px auto",
	};
	const avatarStyle = { backgroundColor: "#121212" };
	const btnStyle = { margin: "9px 0", backgroundColor: "#121212" };

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<LockIcon />
					</Avatar>
					<h2>SIGN IN </h2>
				</Grid>
				<TextField
					label="Username"
					placeholder="Enter username"
					fullWidth
					required
					variant="filled"
				/>

				<TextField
					label="Password"
					placeholder="Enter password"
					type="password"
					fullWidth
					required
					variant="filled"
				/>
				<FormControlLabel
					control={<Checkbox name="checked" color="primary" />}
					label="Remember me"
				/>
				<Button
					type="submit"
					color="primary"
					variant="contained"
					style={btnStyle}
					fullWidth>
					Sign in{" "}
				</Button>
				<Typography>
					<Link href="#">Forgot Password?</Link>
				</Typography>
				<Typography>
					Do you have an account?
					<Link href="#">Sign up</Link>
				</Typography>
			</Paper>
		</Grid>
	);
}

export default Login;
