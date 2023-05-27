//server syntax
// 1. Importing express
const express = require('express');
const userData = require('./model/userdataDB'); //Import DB
const pendingVerification = require('./model/pendingVerificationDB');
const adminVerified = require('./model/adminVerified');
const res = require('express/lib/response');
const cors = require('cors');
require('dotenv').config()
const loginRouter = require('./uncontroller/login')
const adminloginRouter = require('./uncontroller/adminlogin')

// 2. Initializing new express application
const app = new express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/user/login', loginRouter)
app.use('/admin/login', adminloginRouter)



// 3.  API creation
app.get('/', (req, res) => {
    res.send("Server is UP and running.");
});


// ************************************** New User SignUp **************************************
app.post('/user/create', async (req, res) => {
    var userinfo = new userData(req.body);
    if (req.body.userPassword != req.body.userConfirmPassword) {
        console.log("Password does not match.");
    }
    else {
        await userinfo.save().then(() => {
            console.log("User Successfully Added.")
            res.json({"success": true})
        }).catch((err) => (console.log(err),
            res.send("Email Already Exists")));
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


// ************************************** Pending Verification User Count **************************************
app.get('/user/count/pendingverification', async (req, res) => {
    var result = await pendingVerification.countDocuments();
    res.json(result);
});


// ************************************** Admin Verified View **************************************
app.get('/user/view/adminverified', async (req, res) => {
    var result = await adminVerified.find();
    res.json(result);
});


// ******************** Admin Decline And Delete From Pending Verification **************************************
app.post('/user/delete/pendingverification', async (req, res) => {
    var result = await pendingVerification.findByIdAndDelete(req.body._id);
    res.send("User Declined.")
})



// ******************** Admin Accept And Delete From Pending Verification **************************************




var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dhanush6102002@gmail.com',
    pass: 'hpdrksfyvsbhndvl'
  }
});



app.post('/user/new/adminverification', async (req, res) => {
    const request = await new adminVerified(req.body);
    const userEmail = await userData.findOne({ userEmail: req.body.userEmail });
    const category = req.body.category;
    request.save();
    var mailOptions = {
        from: 'dhanush6102002@gmail.com',
        to: `${userEmail.userEmail}`,
        subject: 'Approval of your request',
        text: `Your request has been approved to be a  ${category}.`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.send("User Accepted.")
})






// ******************** Admin Delete From Admin Verified **************************************
app.post('/admin/delete/adminverified', async (req, res) => {
    var result = await adminVerified.findByIdAndDelete(req.body._id);
    res.send("User Deleted.")
})

// ******************** Admin Update From Admin Verified **************************************
app.post('/admin/update/adminverified', async (req,res)=>{
    console.log(`id is ${req.body._id}`)
    console.log(req.body)
    await verfiedRequest.findByIdAndUpdate(req.body._id,req.body)
    res.send("successfully updated")
  })



//Update
// app.post('/course/update', async (req, res) => {
//     var result = await userData.findByIdAndUpdate(req.body._id, req.body);
//     res.send("Course Successfully Updated.")
// })



// 4. Setting port number
app.listen(5000, () => {
    console.log("Server is running on port 5000")
});


