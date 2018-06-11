var EventUser = require('./models/eventuser');
var nodemailer = require('nodemailer');
var fs      = require('fs');
var mustache = require('mustache');




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

    // create todo and send back all todos after creation
    app.post('/api/registerUser', function (req, res) {


console.log("method called ");

        // create a todo, information comes from AJAX request from Angular
        console.log("Hello 2 "+req.body);
        console.log("Hello "+req.body.name);


        console.log(req.body.fname);
        console.log(req.body.lname);
        console.log(req.body.email);
        console.log(req.body.phone);
        console.log(req.body.message);


 			var newEventUser = new EventUser({
                "name": 'req.body.name',
                "lname":'test4',
				"email": 'test@test.com',
				"phone": '234-234-2345',
				"message": 'req.body.message'
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
                    "fname":req.body.fname,
                    "lname":req.body.lname
               } ;

                var content = fs.readFileSync('/assets/email.html').toString();;
                var html = mustache.to_html(content,data);
                //var html = mustache.to_html(content,{fname: req.body.fname,lname:req.body.lname});


//TODO set email subject 
// ఇరవై ఏళ్ళ పండగకు మీ నమోదు వివరాలు 

                console.log("new user registered! Save Succesful "+req.body.lname+">>>>>>>>>>>>"+sendMail);
                '<h1>Welcome</h1><p>That was easy!</p>'
                sendMail(req.body.email, "Thank You for registering "+req.body.fname , html
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
