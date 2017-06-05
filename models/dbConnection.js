var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/project";
var Schema = mongoose.Schema;
connection = mongoose.createConnection(dbUrl,function(err,db){
    if(err){
        console.log("can not create connection!");
    }
});
connection.on("error",function(err){
    if(err){
        console.log("can not connect to mongodb!");
    }
});
module.exports.mongoose = mongoose;

