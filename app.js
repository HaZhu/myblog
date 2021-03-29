const express = require("express");
let app = express();
let bodyParser = require("body-parser");
const http = require("http").Server(app);
const io = require("socket.io")(http);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));

//引入后台控制器模块
const _adminControl = require("./control/adminApi");
_adminControl.control(app);
//引入客户端控制器模块
const _clientControl = require("./control/clientApi");
_clientControl.control(app);
//引入客户端路由模块
const _routes = require("./routes/userRoutes");
_routes.routes(app);
app.use(express.static(__dirname + "/static/admin"));
//引入后台路由模块
const _adminRoutes = require("./routes/adminRoutes");
_adminRoutes.adminRoutes(app);

http.listen(1993, "127.0.0.1", function () {
  console.log("博客服务启动！");
});
var userList = [];
io.on("connection", function (socket) {
  socket.on("exit", function (msg) {
    for (var i = 0; i < userList.length; i++) {
      if (userList[i].name == msg.name) {
        userList.splice(i, 1);
      }
    }
  });
  socket.on("user", function (msg) {
    //把接收到的msg原样广播
    var _trunk = true;
    for (var i = 0; i < userList.length; i++) {
      if (userList[i].name == msg.name) {
        _trunk = false;
        return;
      }
    }
    if (_trunk) {
      userList.push(msg);
    }
    setInterval(function () {
      io.emit("user", userList);
    }, 500);
  });
  socket.on("msg", function (msg) {
    //把接收到的msg原样广播
    io.emit("msg", msg);
  });
});
