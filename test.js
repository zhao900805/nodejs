var mongoose = require('mongoose');
var assert = require('assert');

mongoose.set('debug', true);

var db1 = mongoose.createConnection('mongodb://localhost:27017/gh3639');
var db2 = mongoose.createConnection('mongodb://localhost:27017/gh3639_2');

var userSchema = mongoose.Schema({
  "name": String,
  "email": String
});

var customerSchema = mongoose.Schema({
  "name" : { type: String },
  "email" : [ String ],
  "created_by" : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

var User = db1.model('users', userSchema);
var Customer = db2.model('customers', customerSchema);

User.create({ name: 'Val' }, function(error, user) {
  assert.ifError(error);
  Customer.create({ name: 'Bacon', created_by: user._id }, function(error, customer) {
    assert.ifError(error);
    test(customer._id);
  });
  console.log("user is "+user);
});

function test(id) {
  Customer.findOne({ _id: id }).populate('created_by', 'name email', User).exec(function(error, customer) {
    //assert.ifError(error);
    //assert.equal(customer.created_by.name, 'Val');
    //process.exit(0);
    console.log("customer is"+ customer.created_by._id);
  });
}

/////////////////////////////////////////////

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db1 = mongoose.createConnection('mongodb://localhost:27017/gh3639');
var db2 = mongoose.createConnection('mongodb://localhost:27017/gh3639_2');

var playerSchema = new Schema({
    name:{type:String},
    height:{type:Number},
    weight:{type:String},
    age:{type:Number},
    team:{type:mongoose.Schema.Types.ObjectId,ref:"Team"},
    strike:{type:Number},
    defence:{type:String},
    nationality:{type:String},
    photo_url:{type:String}
});
var teamSchema = new Schema({
    name:{type:String},
    player:[{type:mongoose.Schema.Types.ObjectId,ref:"Player"}],
    age:{type:Number},
    home:{type:String},
    strike:{type:Number},
    defence:{type:String},
    nationality:{type:String},
    photo_url:{type:String}
});
Team = db1.model("Team",teamSchema);
Player = db2.model("Player",playerSchema);

var team = new Team({});
var player = new Player({});
team.player = player._id;
team.name ="zcc";
team.save(function(err){
  if(err){
    console.log("can not save!");
  }
});
player.save();
console.log("---------------");
console.log("we have :"+team);
console.log("also: "+ player);
console.log("and "+team.player);
Team.find({},function(err,team){
  if(err){
    console.log("find not woking!");
  }
  console.log("all team:"+team);
});
Team.findOne({name:"zcc"}).populate("player").exec(function(err,team){
  if(err){
    console.log("err!");
  }
  //console.log("populate:" + team);
})

