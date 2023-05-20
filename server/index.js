//server syntax
// 1. Importing express
const express = require('express');
const userData = require('./model/userdataDB'); //Import DB
const pendingVerification = require('./model/pendingVerificationDB');
const adminVerified = require('./model/adminVerified');
const res = require('express/lib/response');
const cors = require('cors');


// 2. Initializing new express application
const app = new express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// 3.  API creation
app.get('/', (req, res) => {
    res.send("Server is UP and running.");
});

app.get('/json', (req, res) => {
    res.json([{ "name": "Dhanush", "place": "Trivandrum", "age": 21 }])
});

app.post('/facebook/signup', (req, res) => {
    res.send(`Account successfully created ${req.body.fname} ${req.body.lname} `);
})

// ************************************** New User SignUp **************************************
app.post('/user/create', (req, res) => {
    var userinfo = new userData(req.body);
    if (req.body.userPassword != req.body.userConfirmPassword) {
        console.log("Password does not match.");
    }
    else {
        userinfo.save();
        console.log("User Successfully Added.")
    }
})


// ************************************** User Donate/Receive Apply **************************************
app.post('/user/addperson', (req, res) => {
    var unapproved = new pendingVerification(req.body);
        unapproved.save();
        console.log(req.body.name + " Successfully Added.");
        res.send(req.body.name + " Successfully Added.")
    })


// ************************************** Add Donor By Admin **************************************
app.post('/admin/adddonor', (req, res) => {
    var donoraddedbyadmin = new adminVerified(req.body);
        donoraddedbyadmin.save();
        console.log(req.body.name + " Successfully Added.");
        res.send(req.body.name + " Successfully Added.")
    })



// ************************************** SignedUp Users View **************************************
app.get('/user/view/userdata', async (req, res) => {
    var result = await userData.find();
    res.json(result);
});


// ************************************** Pending Verification View **************************************
app.get('/user/view/pendingverification', async (req, res) => {
    var result = await pendingVerification.find();
    res.json(result);
});


// ************************************** Admin Verified View **************************************
app.get('/user/view/adminverified', async (req, res) => {
    var result = await adminVerified.find();
    res.json(result);
});




//Update
// app.post('/course/update', async (req, res) => {
//     var result = await userData.findByIdAndUpdate(req.body._id, req.body);
//     res.send("Course Successfully Updated.")
// })



// 4. Setting port number
app.listen(5000, () => {
    console.log("Server is running on port 5000")
});


