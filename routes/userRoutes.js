exports.routes = function (app) {
  //路由
  const db = require("../control/db.js"); //引入数据库
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");
  const session = require("express-session");
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(
    session({
      secret: "keyboard cat",
      cookie: {
        maxAge: 1000 * 60 * 30,
      },
      resave: true,
      rolling: true,
      saveUninitialized: false,
    })
  );
  function setContent(str) {
    str = str.replace(/<\/?[^>]*>/g, ""); //去除HTML tag
    //str.value = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    return str;
  }

  app.get("/", function (req, res) {
    db.find("blogCont", { recommended: "是" }, function (err, result) {
      var _data = {};
      _data.dataOne = [];
      _data.dataTwo = [];
      _data.dataThree = [];
      for (var i = 0; i < result.length; i++) {
        if (i % 3 == 0) {
          result[i].blogContent = JSON.parse(
            setContent(JSON.stringify(result[i].blogContent))
          );
          _data.dataOne.push(result[i]);
        } else if (i % 3 == 1) {
          result[i].blogContent = JSON.parse(
            setContent(JSON.stringify(result[i].blogContent))
          );
          _data.dataTwo.push(result[i]);
        } else if (i % 3 == 2) {
          result[i].blogContent = JSON.parse(
            setContent(JSON.stringify(result[i].blogContent))
          );
          _data.dataThree.push(result[i]);
        }
      }
      res.render("index.ejs", _data);
    });
  }); //首页
  app.get("/archive", function (req, res) {
    db.find("blogCont", {}, function (err, result) {
      var _data = {};
      _data.dataOne = [];
      _data.dataTwo = [];
      _data.dataThree = [];
      for (var i = result.length - 1; i >= 0; i--) {
        if (i % 3 == 0) {
          result[i].blogContent = JSON.parse(
            setContent(JSON.stringify(result[i].blogContent))
          );
          _data.dataOne.push(result[i]);
        } else if (i % 3 == 1) {
          result[i].blogContent = JSON.parse(
            setContent(JSON.stringify(result[i].blogContent))
          );
          _data.dataTwo.push(result[i]);
        } else if (i % 3 == 2) {
          result[i].blogContent = JSON.parse(
            setContent(JSON.stringify(result[i].blogContent))
          );
          _data.dataThree.push(result[i]);
        }
      }
      res.render("archive.ejs", _data);
    });
  }); //详情页
  app.get("/login", function (req, res) {
    res.render("login.ejs", {});
  }); //登录页面
  app.get("/findpassword", function (req, res) {
    res.render("findpassword.ejs", {});
  }); //找回密码页面
  app.get("/register", function (req, res) {
    res.render("register.ejs", {});
  }); //注册页面
  app.get("/megBoard", function (req, res) {
    db.find("msg", {}, function (err, result) {
      var _data = {};
      _data.dataOne = [];
      _data.dataTwo = [];
      _data.dataThree = [];
      for (var i = result.length - 1; i >= 0; i--) {
        if (i % 3 == 0) {
          _data.dataOne.push(result[i]);
        } else if (i % 3 == 1) {
          _data.dataTwo.push(result[i]);
        } else if (i % 3 == 2) {
          _data.dataThree.push(result[i]);
        }
      }
      res.render("megBoard.ejs", _data);
    });
  }); //留言板

  app.get("/game", function (req, res) {
    res.render("game.ejs", {});
  }); //大白鲨

  app.get("/whale", function (req, res) {
    res.render("whale.ejs", {});
  }); //大白鲨
  app.get("/huli", function (req, res) {
    res.render("huli.ejs", {});
  }); //狐狸
  app.get("/box", function (req, res) {
    res.render("box.ejs", {});
  }); //重力球
  app.get("/heart", function (req, res) {
    res.render("heart.ejs", {});
  }); //爱心
  app.get("/sticky", function (req, res) {
    res.render("sticky.ejs", {});
  }); //橡皮枕头

  app.get("/saolei", function (req, res) {
    res.render("saolei.ejs", {});
  }); //扫雷
  app.get("/dafeiji", function (req, res) {
    res.render("dafeiji.ejs", {});
  }); //打飞机
  app.get("/tuixzi", function (req, res) {
    res.render("tuixzi.ejs", {});
  }); //推箱子
  app.get("/sgsllk", function (req, res) {
    res.render("sgsllk.ejs", {});
  }); //三国杀连连看
  app.get("/tcs", function (req, res) {
    res.render("tcs.ejs", {});
  }); //贪吃蛇
  app.get("/lbs", function (req, res) {
    res.render("lbs.ejs", {});
  }); //蓝宝石
  app.get("/zhouqiu", function (req, res) {
    res.render("zhouqiu.ejs", {});
  }); //桌球
  app.get("/twj", function (req, res) {
    res.render("twj.ejs", {});
  }); //跳舞机
  app.get("/jfcz", function (req, res) {
    res.render("jfcz.ejs", {});
  }); //见缝插针

  app.get("/jianli", function (req, res) {
    res.render("jianli.ejs", {});
  }); //见缝插针
  app.get("/chatroom", function (req, res) {
    res.render("chatroom.ejs", {});
  }); //会员中心页面
  app.get("/contact", function (req, res) {
    res.render("contact.ejs", {});
  }); //会员中心页面
  app.get("/single:id", function (req, res) {
    var _id = req.params.id.split(":")[1];
    db.find("blogCont", { id: parseInt(_id) }, function (err, result) {
      var _json = {};
      _json.thisBlog = result[0];
      _json.radomBlog = [];
      db.find("blogCont", {}, function (err, result) {
        if (result.length > 3) {
          var randomNum = Math.round(Math.random() * (result.length - 3));
          _json.radomBlog.push(result[randomNum]);
          _json.radomBlog.push(result[randomNum + 1]);
          _json.radomBlog.push(result[randomNum + 2]);
        }
        res.render("single.ejs", _json);
      });
    });
  }); //详情页
};
