exports.findPasswordApi = function (req, res, db) {
    var data = req.body;
    if (data.username == "") {
        res.json({
            'status': '0',
            'data': '用户名不能为空！'
        });
    } else if (data.tel == "") {
        res.json({
            'status': '0',
            'data': '手机号不能为空！'
        });
    } else if (data.newpassword.length<6) {
        res.json({
            'status': '0',
            'data': '新密码长度不能小于6！'
        });
    } else if (data.renewpassword.length<6) {
        res.json({
            'status': '0',
            'data': '新密码长度不能小于6！'
        });
    }  else if (data.renewpassword != data.newpassword) {
        res.json({
            'status': '0',
            'data': '密码输入不一致！'
        });
    } else {
        db.find('user', {
            'username': data.username,
            'phoneNunber': data.tel
        }, function (err, result) {
            if (result.length > 0) {
                
                db.updateMany('user', {
                            'username': data.username,
                            'phoneNunber': data.tel
                        }, {
                            $set: {
                                "password": data.newpassword
                            }
                        },
                        function (err, result) {
                            res.json({
                                'status': '1',
                                'data': '密码修改成功！'
                            });
                        
                        })
                
            } else {
                res.json({
                    'status': '0',
                    'data': '很遗憾,您输入的账号或手机不对！'
                });
            }
            
            
            
        })
    }
}