var EventUser = require('./models/eventuser');
var Member=require('./models/member');
var nodemailer = require('nodemailer');
var fs      = require('fs');
var mustache = require('mustache');
const path = require("path");

var http = require("http");
setInterval(function() {
    http.get("https://dtlcgroup.herokuapp.com");
}, 900000); // every 15 minutes (300000)

//Send Mail fnctionality
sendMail = function (toEmail, subjectLine, content) {

   var transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, //ssl
        auth: {
                user:'contact@dtlcgroup.org',
                pass:'svtemple2014'
        }
    });
    
var fromEmail='contact@dtlcgroup.org';
    var mailOptions = {
        bcc:"dtlcgroup@gmail.com,contact@dtlcgroup.org",
        from: fromEmail,
        to: toEmail,
        subject: subjectLine,
        html: content
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


};

function getTodos(res) {

    res.send("HEllo World");
    /* Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    }); */
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);

    });



    app.post('/api/registerMember', function (req, res) {

        var newMember = new Member({

            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "email": req.body.email,
            "phone": req.body.phone,
            "city": req.body.city,
            "state": req.body.state,
            "street1": req.body.street1,
            "street2": req.body.street2,
            "zip": req.body.zip,
            "comments": req.body.comments

        });

        newMember.save(newMember, function (err) {

            if (err) {

                console.log("Member registration failed" + err);
                res.send(err);


            } else {
                var data = {
                    "firstname": req.body.firstname,
                    "lastname": req.body.lastname
                };

                var content = fs.readFileSync(path.join(__dirname, '../dist/dtlcgroup/assets') + '/email.html', 'utf8');
                var html = mustache.to_html(content, data);
                sendMail(req.body.email, "Thank You for registering " + req.body.firstname, html

            );

                res.send("ok");
            }

        }) 



    });
    
    app.post('/api/registerUser', function (req, res) {


console.log("method called ");

        // create a todo, information comes from AJAX request from Angular



        console.log(req.body.firstname);
        console.log(req.body.lastname);
        console.log(req.body.email);
        console.log(req.body.phone);
        console.log(req.body.message);

                   /*  public id: number,
            public firstname: string,
            public lastname: string,
            public email: string,
            
            public phone:string,
            public city:string,
            public state:string,
         
      
      
            public accomdationFlag:string,
            public wiilYouVolunteerTospeakFlag:string,
            public localTravelNeedsFlag:string,
          
            public isVegetarianFlag:string,
            public power: string,
      
            public alterEgo?: string,
            public street1?: string,
            public street2?: string,
            public zip?:number,
            public comments?:string */



 			var newEventUser = new EventUser({

                "firstname": req.body.firstname,
                "lastname": req.body.lastname,
                "email": req.body.email,
                "phone": req.body.phone,
                "city": req.body.city,
                "state": req.body.state,
                "accomdationFlag": req.body.accomdationFlag,
                "wiilYouVolunteerTospeakFlag":req.body.wiilYouVolunteerTospeakFlag,
                "localTravelNeedsFlag": req.body.localTravelNeedsFlag,
                "isVegetarianFlag": req.body.isVegetarianFlag, 
                "street1": req.body.street1,
                "street2": req.body.street2,
                "zip": req.body.zip,
                "comments": req.body.comments

			});

            newEventUser.save(newEventUser, function (err) {

                if (err){

                  //  sendMail("dtlcgroup@gmail.com,contact@dtlcgroup.org", "Registration Failed", req.body.fname + req.body.lname+ "registered with email "+ req.body.email
                  // +"Message: "+req.body.message);
                  // throw err;
                  console.log("User registration failed"+err);
                    res.send(err);
                   // console.log("User registration failed");
                      //res.send(err);
                   

                } else{
                var data = {
                    "firstname":req.body.firstname,
                    "lastname":req.body.lastname
               } ;

               var content = fs.readFileSync(path.join(__dirname, '../dist/dtlcgroup/assets') + '/email.html', 'utf8');

                //var content = fs.readFileSync('/assets/email.html').toString();;
                var html = mustache.to_html(content,data);
                //var html = mustache.to_html(content,{fname: req.body.fname,lname:req.body.lname});


//TODO set email subject 
// ఇరవై ఏళ్ళ పండగకు మీ నమోదు వివరాలు 

                console.log("new user registered! Save Succesful "+req.body.lname+">>>>>>>>>>>>"+sendMail);
                '<h1>Welcome</h1><p>That was easy!</p>'
                sendMail(req.body.email, "Thank You for registering "+req.body.firstname , html
                );

                res.send("ok");
            }

            }) 

          /*   sendMail(req.body.email, req.body.fname + req.body.lname+" registered ", req.body.fname + req.body.lname+ "registered with email "+ req.body.email
             +"Message: "+req.body.message); */

       /*  Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
           res.send("ok");
            // getTodos(res);
        }); */

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
      /*   Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        }); */
    });

    app.get('/email', function (req, res) {
        res.sendFile(__dirname + '/dist/dtlcgroup/email.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/dist/dtlcgroup/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
