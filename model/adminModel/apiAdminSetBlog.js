
exports.apiAdminSetBlog=function(req,res,db){
    const fs = require("fs");
    const image  = require("imageinfo");
    var multiparty = require('multiparty');
    function readFileList(path, filesList) {
        var files = fs.readdirSync(path);
        files.forEach(function (itm, index) {
            var stat = fs.statSync(path + itm);
            if (stat.isDirectory()) {
            //递归读取文件
                readFileList(path + itm + "/", filesList)
            } else {

                var obj = {};//定义一个对象存放文件的路径和名字
                obj.path = path;//路径
                obj.filename = itm//名字
                filesList.push(obj);
            }

        })

    }
    var getFiles = {
        //获取文件夹下的所有文件
            getFileList: function (path) {
                var filesList = [];
                readFileList(path, filesList);
                return filesList;
            },
            //获取文件夹下的所有图片
            getImageFiles: function (path) {
                var imageList = [];

                this.getFileList(path).forEach((item) => {
                    var ms = image(fs.readFileSync(item.path + item.filename));

                    ms.mimeType && (imageList.push(item.filename))
                });
                return imageList;

            }
        };
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
                "data": '发布失败'
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
        if(_IMG==""){
           var _imgFiles = getFiles.getImageFiles("./static/admin/images/blogImgSj/");
           _IMG='admin/images/blogImgSj/'+_imgFiles[Math.round(Math.random()*(_imgFiles.length-1))]
        }
        db.insert('blogCont', {
            'id':new Date().getTime(),
            'agree': 0, // 赞同人数
            'Disapproval': 0, // 不赞同人数
            'recommended': fields.recommended, // 是否推荐
            'comment': 0, // 评论
            'blogTime':new Date().toLocaleString(), // 发表时间
            'aditorName': fields.aditorName, // 作者名
            'blogName': fields.blogName, // 博客名
            'blogContent': fields.blogContent, // 博客内容
            'blogImg': _IMG //图片
        }, function (err, result) {
            res.json({
                'status': '1',
                'data': '发表成功！'
            });
        })
    });
}