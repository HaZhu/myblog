exports.apiAdminUserUpdate = function (req, res, db) {
    const fs = require("fs");
    const image = require("imageinfo");
    var multiparty = require('multiparty');
    var form = new multiparty.Form(); //新建表单
    //设置编辑
    form.encoding = 'utf-8';
    //设置图片存储路径
    form.uploadDir = "./static/user/images/imghead";
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //内存大小
    form.maxFilesSize = 5 * 1024 * 1024; //文件字节大小限制，超出会报错err
    //表单解析
    form.parse(req, function (err, fields, files) {
        //报错处理
        if (err) {
            res.json({
                "status": 0,
                "data": '更新失败'
            });
            return false;
        }
        //获取路径
        var _IMG = '';
        if (files.headImg) {
            var oldpath = files.headImg[0]['path'];
            //文件后缀处理格式
            if (oldpath.indexOf('.jpg') >= 0) {
                var suffix = '.jpg';
            } else if (oldpath.indexOf('.png') >= 0) {
                var suffix = '.png';
            } else if (oldpath.indexOf('.gif') >= 0) {
                var suffix = '.gif';
            } else {
                res.json({
                    "status": 0,
                    "data": '请上传正确格式'
                });
                return false;
            }
            var url = './static/user/images/imghead/' + Date.now() + suffix;
            var fs = require('fs');
            //给图片修改名称
            fs.rename(oldpath, url);
            var _IMG = url.split('static')[1].substring(1);
        }
        if (fields.nickname[0] == "") {
            fields.nickname = fields.phoneNunber; // 昵称 不填默认是使用手机号做用户名
        }
        if (fields.username[0] == "") {
            res.json({
                'status': '0',
                'data': '账号不能为空！'
            });
        }
        else if (fields.username[0].length>10) {
            res.json({
                'status': '0',
                'data': '账号不能超过10位！'
            });
        }
        else if (fields.passwrod[0].length < 6) {
            res.json({
                'status': '0',
                'data': '密码不能小于6位数！'
            });
        }else if (fields.passwrod[0].length > 16) {
            res.json({
                'status': '0',
                'data': '密码不能大于16位数！'
            });
        } 
        else if (fields.address[0].length > 16) {
            res.json({
                'status': '0',
                'data': '地址不能大于16位数,请简写！'
            });
        } 
        else if (fields.nickname[0].length >11) {
            res.json({
                'status': '0',
                'data': '昵称不能大于11位数！'
            });
        } 
        else if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(fields.phoneNunber[0])) {
            res.json({
                'status': '0',
                'data': '手机号错误！'
            });
        } else {
            db.find('user', {
                'username': fields.username
            }, function (err, result) {
                if (result.length > 0 && result[0].username!=fields.oldusername[0]) {
                    res.json({
                        'status': '0',
                        'data': '您的账号已经被使用！'
                    });
                } else {

                    db.find('user', {
                        'phoneNunber': fields.phoneNunber
                    }, function (err, result) {
                        if (result.length > 0 && result[0].phoneNunber!=fields.oldphoneNunber[0]) {
                            res.json({
                                'status': '0',
                                'data': '手机号已经被使用！'
                            });
                        } else {
                            db.find('user', {
                                'nickname': fields.nickname
                            }, function (err, result) {
                                if (result.length > 0 && result[0].nickname!=fields.oldnickname[0]) {
                                    res.json({
                                        'status': '0',
                                        'data': '昵称已经被使用！'
                                    });
                                } else {
                                    
                                        if (_IMG == "") {
                                            db.updateMany('user', {'id':parseInt(fields.id)},{
                                                $set: {
                                                    'username': fields.username, // 用户名
                                                    'password': fields.passwrod, // 密码
                                                    'nickname': fields.nickname, // 昵称 不填默认是使用用户名
                                                    'phoneNunber': fields.phoneNunber, //手机号
                                                    'address': fields.address
                                                }
                                            }, function (err, result) {
                                                res.json({
                                                    'status': '1',
                                                    'data': '更新成功！'
                                                });
                                            }) 
                                        }else{
                                            db.updateMany('user',{'id':parseInt(fields.id)}, {
                                                $set: {
                                                    'username': fields.username, // 用户名
                                                    'password': fields.passwrod, // 密码
                                                    'nickname': fields.nickname, // 昵称 不填默认是使用用户名
                                                    'phoneNunber': fields.phoneNunber, //手机号
                                                    'address': fields.address, //地址
                                                    'headImg': _IMG //头像
                                                }
                                            }, function (err, result) {
                                                res.json({
                                                    'status': '1',
                                                    'data': '更新成功！'
                                                });
                                            })     
                                        }
                                }
                            })
                        }
                    })
                }
            })
        }
    });
}