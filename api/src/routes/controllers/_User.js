/* 
get - info user 
post - reciba el registro y login  
 */
const { User } = require("../../db");
const { hash } = require("bcryptjs");

const { sign } = require("jsonwebtoken");

const { SECRET } = require("../../constants/index");

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
			email,
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

const loginUser = async (req, res) => {
	let user = req.user;

	let payload = {
		id: user.id,
		email: user.email,
	};
	try {
		const token = await sign(payload, SECRET);

		return res.status(200).cookie("token", token, { httpOnly: true }).json({
			success: true,
			message: "Loged in Succesfully ",
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			error: error.message,
		});
	}
};

const protected = async (req, res, next) => {
	try {
		return res.status(200).json({
			info: "protected info",
		});
	} catch (error) {
		next(error);
	}
};

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
	loginUser,
	protected,
	logOut,
};
