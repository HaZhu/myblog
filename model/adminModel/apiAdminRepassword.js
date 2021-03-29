
exports.apiAdminRepassword=function(req,res,db){
        var data = req.body;
        if (data.newpassword != data.renewpassword) {
            res.json({
                'status': '0',
                'data': '您两次输入的密码不一致！'
            });
        } else if(data.newpassword.length<6|| data.renewpassword<6){
             res.json({
                'status': '0',
                'data': '密码不能小于6位数！'
            });
        }
        else {
            db.find('adminUser', {
                'username': req.session.username
            }, function (err, result) {
                if (result.length > 0 && data.oldpassword == result[0].password) {

                    db.updateMany('adminUser', {
                            'username': req.session.username
                        }, {
                            $set: {
                                "password": data.newpassword
                            }
                        },
                        function (err, result) {
                        req.session.password = data.newpassword;
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