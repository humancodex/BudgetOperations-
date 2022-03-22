const { User } = require("../../db");
const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../../constants/index");

const login = async (req, res) => {
	try {
		const email = req.body.email.toLowerCase();
		const password = req.body.password;

		if (!(email && password)) {
			res.status(400).send("All input is required");
		}

		const user = await User.findOne({ where: { email } });

		if (user && (await compare(password, user.password))) {
			const token = sign({ id: user.id, email: user.email }, SECRET, {
				expiresIn: "2h",
			});

			user.token = token;
			const loggedUser = {
				token: user.token,
				id: user.id,
				name: user.name,
			};

			res.status(200).json(loggedUser);
		} else {
			res.status(402).send("El usuario no existe");
		}
	} catch (error) {
		res.status(405).send("Error en el login");
	}
};

const getUsers = async (req, res, next) => {
	try {
		let users = await User.findAll();
		return res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const hashedPassword = await hash(password, 10);
		User.create({
			name,
			email: email.toLowerCase(),
			password: hashedPassword,
		});
		return res.status(201).json({
			success: true,
			message: "The registration was succesfull",
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};

// const loginUser = async (req, res) => {
// 	let user = req.user;

// 	let payload = {
// 		id: user.id,
// 		email: user.email,
// 	};
// 	try {
// 		const token = await sign(payload, SECRET);

// 		return res.status(200).cookie("token", token, { httpOnly: true }).json({
// 			success: true,
// 			message: "Loged in Succesfully ",
// 			token:token
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 		return res.status(500).json({
// 			error: error.message,
// 		});
// 	}
// };

// const profile = async (req, res, next) => {
// 	try {
// 		return res.status(200).json({
// 			info: "protected info",
// 		});
// 	} catch (error) {
// 		next(error);
// 	}
// };

const logOut = async (req, res) => {
	try {
		return res.status(200).clearCookie("token", { httpOnly: true }).json({
			success: true,
			message: "Loged out Succesfully ",
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};

module.exports = {
	getUsers,
	registerUser,

	logOut,
	login,
};
