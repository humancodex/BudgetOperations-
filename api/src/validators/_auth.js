const { compare } = require("bcryptjs");
const { check } = require("express-validator");

const { User } = require("../db");

//password
const password = check("password")
	.isLength({ min: 6, max: 15 })
	.withMessage("Password has to be between 6 a 15 characters");

//Email
const email = check("email")
	.isEmail()
	.withMessage("Please provide a valid Email");

//check if email exist

const emailExist = check("email").custom(async (value) => {
	let email = await User.findOne({ where: { email: value } });

	if (email == value) {
		throw new Error("Email already exist ");
	}
});

//login
const loginFieldsCheck = check("email").custom(async (value, { req }) => {
	let user = await User.findOne({ where: { email: value } });
	// const userdb = await db.query("SELECT * from users WHERE email = $1", [value]);

	if (!user) {
		throw new Error("email does not exist ");
	}

	const validPassword = await compare(req.body.password, user.password);

	if (!validPassword) {
		throw new Error("Wrong password");
	}

	req.user = user;
});

module.exports = {
	registerValidation: [email, password, emailExist],
	loginValidation: [loginFieldsCheck],
};
