const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("user", {
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique:true,
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false,
			
		},
		
	});
};
