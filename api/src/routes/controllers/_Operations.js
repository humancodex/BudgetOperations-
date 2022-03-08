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

const getOperations = async (req, res, next) => {
	try {
		const { id } = req.query;

		if (id) {
			let db = await Operation.findOne({ where: { id } });

			res.status(200).json(db);
		} else {
			let operationList = await Operation.findAll();

			res.status(200).json(operationList);
		}
	} catch (error) {
		next(error);
		res.status(500);
	}
};

const editOperation = async (req, res, next) => {
	try {
		const { id } = req.params;
		let updated = await Operation.update(
			{
				category: req.body.category,
				concept: req.body.concept,
				amount: req.body.amount,
				date: req.body.date,
			},{
			where: { id: id }
		}			
		);
		
		res.status(200).send('update succesfully!');
	} catch (error) {
		next(error);
	}
};

const deleteOp = async (req, res, next) => {
	const { id } = req.params;
	try {
		await Operation.destroy({ where: { id: id } });
		res.status(200).send("delete succeeded");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	postOperation,
	getOperations,
	deleteOp,
	editOperation,
};
