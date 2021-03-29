exports.control = function (app) {
    const db = require("../control/db.js"); //引入数据库
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const session = require("express-session");
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({
        secret: 'keyboard cat',
        cookie: {
            maxAge: 1000 * 60 * 30
        },
        resave: true,
        rolling: true,
        saveUninitialized: false
    }));
    //客户端注册  username passwrod repasswrod gender marriage studyInfo nickname phoneNunber address 昵称不填默认是账号
    app.post("/api_user_register", function (req, res) {
        var _api_user = require("../model/userModel/apiUserRegister.js"); //引入模块
        _api_user.apiUserRegister(req,res,db);
    });

    //客户端登录   username passwrod 
    app.post("/api_user_login", function (req, res) {
        var _api_user = require("../model/userModel/apiUserLogin.js"); //引入模块
        _api_user.apiUserLogin(req,res,db);
    });
    
    //用户中心   username 
    app.post("/api_user_contact", function (req, res) {
        var _api_user = require("../model/userModel/contactApi.js"); //引入模块
        _api_user.contactApi(req,res,db);
    });
    
    //用户中心修改个人信息   username
    app.post("/api_user_Modify_info", function (req, res) {
        var _api_user = require("../model/userModel/userInfoApi.js"); //引入模块
        _api_user.apiUserInfo(req,res,db);
    });

     //用户中心修改个人密码  username
    app.post("/api_user_password", function (req, res) {
        var _api_user = require("../model/userModel/userPasswordApi.js"); //引入模块
        _api_user.userPasswordApi(req,res,db);
    });
    //生成留言  username
    app.post("/api_user_toMsg", function (req, res) {
        var _api_user = require("../model/userModel/toMsgBoardApi.js"); //引入模块
        _api_user.toMsgBoardApi(req,res,db);
    });
    //找回密码  
    app.post("/api_user_findPassword", function (req, res) {
        var _api_user = require("../model/userModel/findPasswordApi.js"); //引入模块
        _api_user.findPasswordApi(req,res,db);
    });
    //找回密码  
    app.post("/api_user_headImgUpdate", function (req, res) {
        var _api_user = require("../model/userModel/headImgUpdataApi.js"); //引入模块
        _api_user.headImgUpdataApi(req,res,db);
    });



}