exports.userPasswordApi = function (req, res, db) {
    var data = req.body;
    if (data.newPassword != data.RePassword) {
        res.json({
            'status': '0',
            'data': '您两次输入的密码不一致！'
        });
    } else if (data.newPassword.length < 6 || data.RePassword < 6) {
        res.json({
            'status': '0',
            'data': '密码不能小于6位数！'
        });
    } else {
        db.find('user', {
            'username': req.session.clientUserName,
            'password': req.session.clientUserPassword,
            'nickname': data.nickname
        }, function (err, result) {
            if (result.length > 0 && data.oldPassword == result[0].password) {
                db.updateMany('user', {
                        'username': req.session.clientUserName,
                        'password': req.session.clientUserPassword,
                        'nickname': data.nickname
                    }, {
                        $set: {
                            "password": data.newPassword
                        }
                    },
                    function (err, result) {
                        req.session.clientUserPassword = data.newPassword;
                        res.json({
                            'status': '1',
                            'data': '密码修改成功,退出登陆生效！'
                        });
                    })
            } else {
                res.json({
                    'status': '0',
                    'data': '您的原始密码不对！'
                });
            }
        })
    }
}