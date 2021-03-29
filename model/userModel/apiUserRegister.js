
exports.apiUserRegister=function(req,res,db){
         var data = req.body;
        if (data.nickname == "") {
            data.nickname = data.phoneNunber; // 昵称 不填默认是使用手机号做用户名
        }
        if (data.username == "") {
            res.json({
                'status': '0',
                'data': '账号不能为空！'
            });
        }
        else if (data.username.length>10) {
            res.json({
                'status': '0',
                'data': '账号不能超过10位！'
            });
        }
        else if (data.passwrod != data.repasswrod) {
            res.json({
                'status': '0',
                'data': '您两次输入的密码不一致！'
            });
        } else if (data.passwrod.length < 6 || data.repasswrod.length < 6) {
            res.json({
                'status': '0',
                'data': '密码不能小于6位数！'
            });
        }else if (data.passwrod.length > 16 || data.repasswrod.length > 16) {
            res.json({
                'status': '0',
                'data': '密码不能大于16位数！'
            });
        } 
        else if (data.address.length > 16) {
            res.json({
                'status': '0',
                'data': '地址不能大于16位数,请简写！'
            });
        } 
        else if (data.nickname.length >11) {
            res.json({
                'status': '0',
                'data': '昵称不能大于11位数！'
            });
        } 
        else if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(data.phoneNunber)) {
            res.json({
                'status': '0',
                'data': '手机号错误！'
            });
        } 
        else {
            db.find('user', {
                'username': data.username
            }, function (err, result) {
                if (result.length > 0) {
                    res.json({
                        'status': '0',
                        'data': '您的账号已经被使用！'
                    });
                } else {

                    db.find('user', {
                        'phoneNunber': data.phoneNunber
                    }, function (err, result) {
                        if (result.length > 0) {
                            res.json({
                                'status': '0',
                                'data': '手机号已经被使用！'
                            });
                        } else {
                            db.find('user', {
                                'nickname': data.nickname
                            }, function (err, result) {
                                if (result.length > 0) {
                                    res.json({
                                        'status': '0',
                                        'data': '昵称已经被使用！'
                                    });
                                } else {
                                        db.insert('user', {
                                            'id':new Date().getTime(),
                                            'username': data.username, // 用户名
                                            'password': data.passwrod, // 密码
                                            'gender': data.gender, // 学历
                                            'marriage': data.marriage, // 婚姻
                                            'studyInfo': data.studyInfo, // 学历
                                            'nickname': data.nickname, // 昵称 不填默认是使用用户名
                                            'phoneNunber': data.phoneNunber, //手机号
                                            'address': data.address, //地址
                                            'headImg': 'user/images/public/head.png' //地址
                                        }, function (err, result) {
                                            res.json({
                                                'status': '1',
                                                'data': '注册成功！'
                                            });
                                        })   
                                }
                            })
                        }
                    })
                }
            })
        }
}