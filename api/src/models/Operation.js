const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {

  
  sequelize.define("operation", {
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		concept: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		type: {
			type: DataTypes.ENUM('earnings', 'outgoings'),
		},
	});
}
