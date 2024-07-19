const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blogs");
const tagRoutes = require("./routes/tags");
const fileRoutes = require("./routes/file");
const sequelize = require("./config/database");

const app = new express();

// 中间件
app.use(bodyParser.urlencoded({ extended: false })); //用来解析 post body x-www-form-urlencoded 格式数据
app.use(bodyParser.json()); // 用来解析 post body json 格式数据
app.use(cors()); //处理跨域
app.use("/tempFiles", express.static(path.join(__dirname, "tempFiles"))); // 提供静态文件访问

// 路由
app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);
app.use("/tags", tagRoutes);
app.use("/upload", fileRoutes);

//数据库同步
sequelize
	.sync()
	.then(() => {
		console.log("database synced");
	})
	.catch((err) => {
		console.error("Error syncing database:", error);
	});

// 启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
