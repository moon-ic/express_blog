// 用户模型
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class User extends Model {}

User.init(
	{
		username: {
			comment: "用户名",
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			comment: "密码",
			type: DataTypes.STRING,
			allowNull: false
		},
		nickname: {
			comment: "昵称",
			type: DataTypes.STRING,
			allowNull: false
		},
		lastOnlineTime: {
			comment: "最后登录时间",
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: "User"
	}
);

module.exports = User;
