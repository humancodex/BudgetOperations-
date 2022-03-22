const jwt = require("jsonwebtoken");
const { SECRET } = require("../constants");


const verifyToken = (req, res, next) => {
	const token = req.body.token;

	if (!token) {
		return res.status(403).send("A token is required for authentication");
	}
	try {
		const decoded = jwt.verify(token, SECRET);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send("Invalid Token");
	}
	return next();
};

module.exports = verifyToken;
