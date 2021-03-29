exports.apiUserInfo = function (req, res, db) {
    var data = req.body;
    if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(data.phoneNunber)) {
        res.json({
            'status': '0',
            'data': '手机号错误！'
        });
    } else if (data.address.length > 16) {
        res.json({
            'status': '0',
            'data': '地址不能大于16位数,请简写！'
        });
    } else if (data.nickname.length > 11) {
        res.json({
            'status': '0',
            'data': '昵称不能大于11位数！'
        });
    } else {
        db.find('user', {
            'phoneNunber': data.phoneNunber
        }, function (err, result) {
            if (result.length > 0 && data.oldphoneNunber!=data.phoneNunber) {
                res.json({
                    'status': '0',
                    'data': '手机号已经被使用！'
                });
            } else {
                db.find('user', {
                    'nickname': data.nickname
                }, function (err, result) {
                    if (result.length > 0 && data.oldNickname!=data.nickname) {
                        res.json({
                            'status': '0',
                            'data': '这个昵称已经被使用！'
                        });
                    } else {
                        db.updateMany('user', {
                            'nickname': data.oldNickname
                        }, {
                            $set: {
                                'nickname': data.nickname,
                                'phoneNunber': data.phoneNunber,
                                'address': data.address
                            }
                        }, function (err, result) {
                            res.json({
                                'status': '1',
                                'data': '修改成功'
                            })
                        })
                        //改的命令结束
                    }
                })
                //查的命令结束
            }
        }) //查的命令结束
    }
}