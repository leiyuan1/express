var express = require('express');
var router = express.Router();
// 链接数据库
var mysql=require("./mysql.js");

router.post('/', function(req, res) {
    var sname=req.body.sname;
    var ssex=req.body.ssex;
    var sage=req.body.sage;
    var sphone=req.body.sphone;
    mysql.query(`insert into student (sname,ssex,sage,sphone) values ("${sname}","${ssex}","${sage}","${sphone}")`,function(err,result){
         if(err){
             console.log(err);
             res.end();
         }else{
             if(result.insertId){
                 console.log("添加成功");
                  res.redirect("/add");
                  res.end();
             }else{
                 console.log("添加失败");
                 res.redirect("/add");
                 res.end();
             }
         }
    })
});
module.exports = router;