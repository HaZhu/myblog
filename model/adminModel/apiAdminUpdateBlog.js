exports.apiAdminUpdateBlog = function (req, res, db) {
    const fs = require("fs");
    const image = require("imageinfo");
    var multiparty = require('multiparty');
    var form = new multiparty.Form(); //新建表单
    //设置编辑
    form.encoding = 'utf-8';
    //设置图片存储路径
    form.uploadDir = "./static/admin/images/blogImg";
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
        if (files.blogImg) {
            var oldpath = files.blogImg[0]['path'];
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
            var url = './static/admin/images/blogImg/' + Date.now() + suffix;
            var fs = require('fs');
            //给图片修改名称
            fs.rename(oldpath, url);
            var _IMG = url.split('static')[1].substring(1);
        }
        if (_IMG == "") {
            db.updateMany('blogCont', {
                'id':parseInt(fields.id)
            }, {
                $set: {
                    'blogTime': new Date().toLocaleString(), // 发表时间
                    'aditorName': fields.aditorName, // 作者名
                    'blogName': fields.blogName, // 博客名
                    'recommended': fields.recommended, // 是否推荐
                    'blogContent': fields.blogContent // 博客内容
                }
            }, function (err, result) {
                res.json({
                    'status': '1',
                    'data': '更新成功！'
                });
            })
        } else {
            db.updateMany('blogCont', {
                'id':parseInt(fields.id)
            }, {
                $set: {
                    'blogTime': new Date().toLocaleString(), // 发表时间
                    'aditorName': fields.aditorName, // 作者名
                    'blogName': fields.blogName, // 博客名
                    'recommended': fields.recommended, // 是否推荐
                    'blogContent': fields.blogContent, // 博客内容
                    'blogImg': _IMG //图片
                }
            }, function (err, result) {
                res.json({
                    'status': '1',
                    'data': '更新成功！'
                });
            })
        }
    });
}