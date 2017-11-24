var mysql=require("mysql");
var connection=mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'leiyuan',
    database : 'express',
    dateStrings : "DATE"
})
// 返回
module.exports=connection;