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
    //后台登录接口    接收username  password两个参数
    app.post("/api_admin_userlogin", function (req, res) {
         const _api_admin_userlogin = require("../model/adminModel/apiAdminUserLogin.js"); //后台登录文件
        _api_admin_userlogin.apiAdminUserLogin(req,res,db);   
    });
    //销毁session
    app.post("/api_session_destroy", function (req, res) {
        req.session.destroy();
        res.json({
            'status': '1',
            'data': '退出成功！'
        });
    });
    //后台修改密码接口   调用session 得到当前登陆名  然后搜索在修改密码 
    app.post("/api_admin_repassword", function (req, res) {
        const _api_admin_repassword = require("../model/adminModel/apiAdminRepassword.js"); //后台修改管理员密码文件
        _api_admin_repassword.apiAdminRepassword(req,res,db); 
    });
    //后台上传博客 
    app.post("/api_admin_addBlog", function (req, res) {
        const _api_admin_addBLog  = require("../model/adminModel/apiAdminSetBlog.js");
        _api_admin_addBLog.apiAdminSetBlog(req,res,db); 
    });
    //后台删除博客 
    app.post("/api_admin_deleteBlog", function (req, res) {
        const _api_admin_deleteBlog  = require("../model/adminModel/apiAdminDeleteBlog.js");
        _api_admin_deleteBlog.apiAdminDeleteBlog(req,res,db); 
    });
    //后台更新博客 
    app.post("/api_admin_updateBlog", function (req, res) {
        const _api_admin_updateBlog  = require("../model/adminModel/apiAdminUpdateBlog.js");
        _api_admin_updateBlog.apiAdminUpdateBlog(req,res,db); 
    });
    //后台删除留言
    app.post("/api_admin_deleteMsg", function (req, res) {
        const _api_admin_deleteMsg = require("../model/adminModel/apiAdmindeleteMsg.js");
        _api_admin_deleteMsg.apiAdmindeleteMsg(req,res,db); 
    });
    //后台删除会员
    app.post("/api_admin_deleteUser", function (req, res) {
        const _api_admin_deleteUser = require("../model/adminModel/apiAdmindeleteUser.js");
        _api_admin_deleteUser.apiAdmindeleteUser(req,res,db); 
    });
    //后台添加会员
    app.post("/api_admin_addUser", function (req, res) {
        const _api_admin_addUser = require("../model/adminModel/apiAdminAddUser.js");
        _api_admin_addUser.apiAdminAddUser(req,res,db); 
    });
    //后台更新会员 
    app.post("/api_admin_updateUser", function (req, res) {
        const _api_admin_updateUser  = require("../model/adminModel/apiAdminUserUpdate.js");
        _api_admin_updateUser.apiAdminUserUpdate(req,res,db); 
    });
}























