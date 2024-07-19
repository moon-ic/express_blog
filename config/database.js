const { SequeLize } = require("sequelize");

const sequelize = new SequeLize(
	"moonic_blog_database",
	//数据库名称
	"moonic",
	//用户名
	"11",
	//密码
	{
		host: "localhost",
		dialect: "mysql"
	}
);

module.exports = sequelize;
