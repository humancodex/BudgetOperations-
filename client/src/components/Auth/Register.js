import React from "react";

import {
	FormControl,
	Input,
	FormHelperText,
	InputLabel,
	Container,
	Grid,Button,
  makeStyles
} from "@mui/material";

// const useStyles = makeStyles((theme) => ({
// 	paper: {
// 		marginTop: theme.spacing(8),
// 		display: "flex",
// 		flexDirection: "column",
// 		alignItems: "center",
// 	},
// 	avatar: {
// 		margin: theme.spacing(1),
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	form: {
// 		width: "100%", // Fix IE 11 issue.
// 		marginTop: theme.spacing(1),
// 	},
// 	submit: {
// 		margin: theme.spacing(3, 0, 2),
// 	},
// }));

function Register() {


	return (
		<>
			<Container  maxWidth='xs'>
				{/* <Grid container >


					<Grid  item md={12}>
						<FormControl>
							<InputLabel htmlFor="Name">Name </InputLabel>
							<Input id="nameInput" aria-describedby="name_helper" />
						</FormControl>
					</Grid>


					<Grid  item md={12}>
						<FormControl>
							<InputLabel htmlFor="email">Email adress</InputLabel>

							<Input id="emailInput" aria-describedby="my-helper-mail" />
							<FormHelperText id="my-helper-mail">
								We'll never share your email.
							</FormHelperText>
						</FormControl>
					</Grid>


					<Grid  item md={12}>
						<FormControl>
							<InputLabel htmlFor="password">Password </InputLabel>
							<Input id="passwordInput" aria-describedby="my-helper-password" />
						</FormControl>
					</Grid>
				
				</Grid>
        	<Button variant='contained' color='black'>
          Registrarse
        </Button> */}
			</Container>
		</>
	);
}

//formulario

export default Register;
