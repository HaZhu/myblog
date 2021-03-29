exports.apiUserLogin = function (req, res, db) {
    var data = req.body;
    if (data.username == "") {
        res.json({
            'status': '0',
            'data': '用户名不能为空！'
        });
    } else if (data.password == "") {
        res.json({
            'status': '0',
            'data': '密码不能为空！'
        });
    } else {
        db.find('user', {
            'username': data.username,
            'password': data.password
        }, function (err, result) {
            if (result.length > 0) {
                req.session.clientUserName=data.username;
                req.session.clientUserPassword=data.password;
                res.json({
                    'status': '1',
                    'nickname': result[0].nickname,
                    'headImg': result[0].headImg,
                    'tips': "恭喜你登录成功！"
                });
            } else {
                res.json({
                    'status': '0',
                    'data': '很遗憾,您输入的账号或密码不对！'
                });
            }
        })
    }
}