exports.adminRoutes = function (app) {
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
        resave: false,
        saveUninitialized: true
    }));
    //路由
    app.use("/admin", function (req, res, next) {
        if (req.session.username || req.session.password) {
            db.find('adminUser', {
                'username': req.session.username,
                'password': req.session.password
            }, function (err, result) {
                if (result.length > 0) {
                    next();
                } else {
                    res.render("admin/login", {});
                }
            })
        } else {
            res.render("admin/login", {});
        }
    }); //不能绕过登录

    app.get("/admin/", function (req, res) {
        res.render("admin/login", {});
    }); //登录
    app.get("/admin/index", function (req, res) {
        res.render("admin/index", {});
    }); //首页
    app.get("/admin/registerpsw", function (req, res) {
        res.render("admin/registerpsw", {});
    }); //编辑博客
    app.get("/admin/editeBlock", function (req, res) {
        db.find('blogCont', {}, function (err, result) {
            var _data={};
            _data.data=result;
            res.render("admin/editeBlock", _data);
        })
    });
    //编辑个人简历
    app.get("/admin/editeMessage", function (req, res) {
        db.find('msg', {}, function (err, result) {
            var _data={};
            _data.data=result;
            res.render("admin/editeMessage", _data);
        })
    }); //留言
    app.get("/admin/setBlock", function (req, res) {
        res.render("admin/setBlock", {});
    }); //写博客
    app.get("/admin/setHobite", function (req, res) {
        res.render("admin/setHobite", {});
    }); //个人爱好
    app.get("/admin/setPhone", function (req, res) {
        res.render("admin/setPhone", {});
    }); //设置联系方式
    app.get("/admin/setSkill", function (req, res) {
        res.render("admin/setSkill", {});
    }); //个人技能
    app.get("/admin/settingInfo", function (req, res) {
        res.render("admin/settingInfo", {});
    }); //个人信息
    app.get("/admin/userAdd", function (req, res) {
        res.render("admin/userAdd", {});
    }); //添加用户
    app.get("/admin/userList", function (req, res) {
        db.find('user', {}, function (err, result) {
            var _data={};
            _data.data=result;
            res.render("admin/userList", _data);
        })
    }); //用户列表
    app.get("/admin/editeInfo:id", function (req, res) {
        var _id=req.params.id.split(':')[1];
        db.find('blogCont', {'id':parseInt(_id)}, function (err, result) {
            var _json={};
                _json.thisBlog=result[0];
            res.render("admin/editeInfo", _json);
        })
    }); //博客更新
    app.get("/admin/userDetail:id", function (req, res) {
        var _id=req.params.id.split(':')[1];
        db.find('user', {'id':parseInt(_id)}, function (err, result) {
            var _json={};
                _json.thisuser=result[0];
            res.render("admin/userDetail", _json);
        })
    }); //会员更新
}
