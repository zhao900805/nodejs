var db = require("./dbConnection");
var mongoose = db.mongoose;
var postSchema = require("../schemas/postSchema");
module.exports.Post = mongoose.model("Post",userSchema);