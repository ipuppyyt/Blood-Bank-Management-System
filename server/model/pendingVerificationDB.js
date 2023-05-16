//DB COnnection

//1. Import Mongoose
const mongoose = require ('mongoose')

//2. Connecting DB
mongoose.connect("mongodb+srv://Full_Stack_Internship:fullstack@fullstack.z46xgar.mongodb.net/?retryWrites=true&w=majority");

//3. Schema Creation
const Schema = mongoose.Schema;
const pendingVerificationSchema = new Schema({
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
var pendingVerification = mongoose.model("pendingverifications",pendingVerificationSchema);


//5. Exporting Model
module.exports = pendingVerification;