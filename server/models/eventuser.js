var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventUsersSchema = new Schema({
    name: String,
    phone: String,
    message:String,
    email: String
 
});



module.exports = mongoose.model('EventUser', EventUsersSchema);
