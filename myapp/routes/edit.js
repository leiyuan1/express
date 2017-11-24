var express = require('express');
var router = express.Router();
// 链接数据库
var mysql=require("./mysql.js");

/* GET home page. */
router.get('/:sid', function(req, res, next) {
    var sid=req.params.sid;
     mysql.query(`select * from student where sid="${sid}"`,function(err,result){
         if(err){
            console.log(err);
            res.end();
         }else{
             res.render('edit',{ results: result });
             res.end();
         }
     })


});
module.exports = router;