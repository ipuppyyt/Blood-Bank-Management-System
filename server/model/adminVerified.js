//DB COnnection

//1. Import Mongoose
const mongoose = require ('mongoose')

//2. Connecting DB
mongoose.connect("mongodb+srv://Full_Stack_Internship:fullstack@fullstack.z46xgar.mongodb.net/?retryWrites=true&w=majority");

//3. Schema Creation
const Schema = mongoose.Schema;
const adminVerifiedSchema = new Schema({
    name:String,
    age:Number,
    email:String,
    phone:Number,
    bloodgroup:String,
    category:String,
    unitsofblood:Number,
    ailments:String
});


//4. Model Creation
var adminVerified = mongoose.model("adminverifiedproviders",adminVerifiedSchema);

//5. Exporting Model
module.exports = adminVerified;  //Exporting Model