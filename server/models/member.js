var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MemberSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    city: String,
    state: String,
    street1: String,
    street2: String,
    zip: String,
    comments: String,
});



module.exports = mongoose.model('Member', MemberSchema);