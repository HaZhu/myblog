
exports.apiAdminUserLogin=function(req,res,db){
        var data = req.body;
        db.find('adminUser', {
            'username': data.username
        }, function (err, result) {
            if (result.length > 0 && data.password == result[0].password) {
                req.session.username = result[0].username;
                req.session.password = result[0].password;
                res.json({
                    'status': '1',
                    'data': '恭喜你登陆成功'
                });
            } else {
                res.json({
                    'status': '0',
                    'data': '很遗憾,您输入的账号或密码不对！'
                });
            }
        })
}