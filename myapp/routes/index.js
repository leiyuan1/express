var express = require('express');
var router = express.Router();
// 链接数据库
var mysql=require("./mysql.js");
router.get('/',function(req,res,next){
    res.render('index');
})
/* GET home page. */
router.post('/ajax', function(req, res, next) {
    var page=req.body.pages;
    console.log(page);
    var num=18;
    var pageNum=page*num;
    // 查询
    mysql.query(`select *,year(date_format(now(),'%Y-%m-%d'))-year(sage) as ages,case ssex when 0 then "女" else "男" end as sexx from student limit `+pageNum+" , "+num,function(err,result){
        if(err){
            console.log(err);
            res.end();
        }else{
            res.render("ajax",{ results:result})

        }
    })
});
module.exports = router;
