var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventUsersSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    city: String,
    state: String,
    accomdationFlag: String,
    wiilYouVolunteerTospeakFlag:String,
    localTravelNeedsFlag: String,
    isVegetarianFlag: String, 
    street1: String,
    street2: String,
    zip: String,
    comments: String,
});



           /*  public id: number,
            public firstname: string,
            public lastname: string,
            public email: string,
            
            public phone:string,
            public city:string,
            public state:string,
         
      
      
            public accomdationFlag:string,
            public accomdationFlag:string,
            public localTravelNeedsFlag:string,
          
            public isVegetarianFlag:string,
            public power: string,
      
            public alterEgo?: string,
            public street1?: string,
            public street2?: string,
            public zip?:number,
            public comments?:string */



module.exports = mongoose.model('EventUser', EventUsersSchema);
