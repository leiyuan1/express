var express = require('express');
var router = express.Router();
// 链接数据库
var mysql=require("./mysql.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('addFile');
});
module.exports = router;