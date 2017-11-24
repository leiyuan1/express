var express = require('express');
var multer = require('multer');
var xlsx = require('node-xlsx');
var router = express.Router();
// 链接数据库
var mysql=require("./mysql.js");

//设置存储的文件名
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime()+file.originalname);
    }
})
var upload = multer({ storage: storage })

/* GET home page. */
//上传文件
router.post('/', upload.single('files'), function(req, res, next) {
    var filePath=req.file.path;
    var info=xlsx.parse(filePath)[0].data;
    for(let i=2;i<info.length;i++){
        info[i][2]=new Date(1900,0,info[i][2]-1).toLocaleDateString();
        var ssex;
        if(info[i][1]=="男"){
            ssex=1;
        }else {
            ssex=0;
        }
        info[i][1]=ssex;
    }
    info.shift();
    info.shift();
    mysql.query("insert into student (sname,ssex,sage,sphone) values ? ",[info],function (err,result) {
        if (err) {
            console.log(err);
            res.end();
        } else {

            if (result.affectedRows > 0) {
                console.log("上传成功")
                res.redirect("/");
                res.end();
            }else{
                console.log("上传失败");
                res.redirect("/");
                res.end();
            }
        }
    })
});
module.exports = router;