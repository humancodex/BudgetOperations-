const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("user", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		
	});
};
