exports.headImgUpdataApi = function (req, res, db) {    
    const fs = require("fs");
    const image  = require("imageinfo");
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
                "data": '上传失败'
            });
            return false;
        }
        //获取路径
        var _IMG = '';
        if (files.avatar_file) {
            var oldpath = files.avatar_file[0]['path'];
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
        if(_IMG==""){
           res.json({
                    "status": 0,
                    "data": '失败'
                });
        }else{
            db.updateMany('user', {
                            'id': parseInt(fields.avatar_id[0])
                        }, {
                            $set: {
                                'headImg':_IMG
                            }
                        }, function (err, result) {
                            res.json({
                                'status': '1',
                                'message': '头像修改成功',
                                'newHeadImg':_IMG
                            })
                        })
                        //改的命令结束
        }
    });
}