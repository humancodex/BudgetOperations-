const axios = require("axios");

const { Operation } = require("../../db");
/* 

post> nueva operation 
get > todas mis operations , filtrado por categoria 
put >
delete >

ingreso o egreso no se pueden modificar 

*/

const postOperation = async (req, res, next) => {
	try {
		const data = req.body;
		await Operation.create(data).then(res.status(200).send("success!"));
	} catch (error) {
		next(error);
		res.status(500);
	}
};

module.exports = {
	postOperation,
};
