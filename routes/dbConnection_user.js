var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/project";
var connection = null;
var model = null;
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String,default:null},
    password:{type:String,default:null},
    posts:[{type:Schema.Types.ObjectId,ref:"Post"}],
    user_img:{type:String,default:null},
    following:[{type:Schema.Types.ObjectId,ref:"User"}],
    follower:[{type:Schema.Types.ObjectId,ref:"User"}],
    comments:[{type:Schema.Types.ObjectId,ref:"Comment"}]
});
module.exports.getUserModel = function (){
    /*mongoose.connect(dbUrl,function(err){
        if(err){
            console.log(" user mongoose can not connect!");
        }
    });
    model = mongoose.model("User",userSchema,"users");
    return model;*/

    if(connection == null){
        console.log("user creating connection...");
        connection = mongoose.createConnection(dbUrl,function(err,db){
            if(err){
                console.log('can not create!');
            }
        });
        model = connection.model("User",userSchema);
    }
    return model;

    /*mongoose.connect(dbUrl);
    db = mongoose.connection;
    db.once('open', function callback () {
        console.log("db is open!");
    });
    model = mongoose.model("User",userSchema);
    return model;*/
}
