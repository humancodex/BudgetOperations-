const { compare } = require("bcryptjs");
const { check } = require("express-validator");

const db = require("../db");

//password
const password = check("password")
	.isLength({ min: 6, max: 15 })
	.withMessage("Password has to be between 6 a 15 characters");

//Email
const email = check("email").isEmail().withMessage("Please provide a valid Email");

//check if email exist

const emailExist = check("email").custom(async (value) => {
	const { rows } = await db.query("SELECT * from users WHERE email = $1", [
		value,
	]);

	if (rows.length) {
		throw new Error("Email already exist ");
	}
});

//login
const loginFieldsCheck = check("email").custom(async (value ,{req}) => {
	const user = await db.query("SELECT * from users WHERE email = $1", [
		value,
	]);
    if(!user.rows.length){
        throw new Error('email does not exist ')
    }

    const validPassword = await compare(req.body.password, user.rows[0].password)

    if(!validPassword){
        throw new Error('Wrong password')
    }

	req.user = user.rows[0]

})

module.exports = {
	registerValidation: [email, password, emailExist],
    loginValidation:[loginFieldsCheck],
};
