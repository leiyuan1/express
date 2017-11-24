var express = require('express');
var router = express.Router();
// 链接数据库
var mysql=require("./mysql.js");

router.post('/', function(req, res) {
    var sid=req.body.sid;
    var sname=req.body.sname;
    var ssex=req.body.ssex;
    var sage=req.body.sage;
    var sphone=req.body.sphone;
    console.log(`update student set 'sname'="${sname}",'ssex'="${ssex}",'sage'="${sage}",'sphone'="${sphone}" where 'sid'="${sid}"`);

    mysql.query(`update student set sname="${sname}",ssex="${ssex}",sage="${sage}",sphone="${sphone}" where sid="${sid}"`,function(err,result){
          if(err){
            console.log(err);
              res.end();
          }else{
              if(result.affectedRows>0){
                  console.log("修改成功")
                  res.redirect("/");
                  res.end();
              }else{
                  console.log("修改失败")
                  res.redirect("/");
                  res.end();
              }
          }
   })

});
module.exports = router;