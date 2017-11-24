var express = require('express');
var router = express.Router();
// 链接数据库
var mysql=require("./mysql.js");

/* GET home page. */
router.get('/:sid', function(req, res, next) {
    var sid=req.params.sid;
    mysql.query(`delete from student where sid="${sid}"`,function(err,result){
        if(err){
            console.log(err);
            res.end();
        }else{
            if(result.affectedRows>0){
                console.log("删除成功");
                res.redirect("/");
                res.end();
            }else{
                console.log("删除失败");
                res.redirect("/");
                res.end();
            }
        }
    })


});
module.exports = router;