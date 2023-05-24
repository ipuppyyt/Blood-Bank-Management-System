//DB COnnection

//1. Import Mongoose
const mongoose = require ('mongoose')

//2. Connecting DB
mongoose.connect("mongodb+srv://Full_Stack_Internship:fullstack@fullstack.z46xgar.mongodb.net/?retryWrites=true&w=majority");

//3. Schema Creation
const Schema = mongoose.Schema;
const userdataSchema = new Schema({
    userName:String,
    userEmail:{type:String,unique:true},
    userPassword:String,
    userPhone:Number,
    userAvatar:String
});


//4. Model Creation
var userData = mongoose.model("users",userdataSchema); 


//5. Exporting Model
module.exports = userData;  //Exporting Model