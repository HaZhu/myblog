
exports.apiAdmindeleteMsg=function(req,res,db){
    const data = req.body;
        db.deleteMany('msg',
            {'id':parseInt(data.id)}
        , function (err, result) {
            if(err){
                res.json({
                    'status': '0',
                    'data': '删除失败！'
                });
                return ;
            }
            res.json({
                'status': '1',
                'data': '删除成功！'
            });
        })
}