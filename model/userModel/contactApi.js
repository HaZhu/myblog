exports.contactApi = function (req, res, db) {
        var data = req.body;
        db.find('user', {
            'nickname': data.nickname
        }, function (err, result) {
            if (result.length > 0) {
                if(req.session.clientUserName==result[0].username && req.session.clientUserPassword==result[0].password){
                    res.json({
                        'status': '1',
                        'data': result
                    })
                }else{
                   res.json({
                        'status': '0',
                        'data': '信息获取失败！'
                    }); 
                }  
            } else {
                res.json({
                    'status': '0',
                    'data': '信息获取失败！'
                });
            }
        })
}