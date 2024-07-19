// 博客模型
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Tag = require("./Tag");

class Blog extends Model {}

Blog.init(
	{
		title: {
			comment: "标题",
			type: DataTypes.STRING,
			allowNull: false
		},
		content: {
			comment: "博客内容",
			type: DataTypes.TEXT,
			allowNull: false
		},
		coverImage: {
			comment: "封面图",
			type: DataTypes.STRING
		},
		isDeleted: {
			comment: "是否已经删除",
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	},
	{
		sequelize,
		modelName: "Blog"
	}
);

// 博客和标签关联 1-n
Blog.belongsToMany(Tag, { through: "Blog_Tag", as: "blogs" });

// 博客和用户关联 1-1
Blog.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Blog, { foreignKey: "userId", as: "user" });

module.exports = Blog;
