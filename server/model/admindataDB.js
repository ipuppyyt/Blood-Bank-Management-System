//DB COnnection

//1. Import Mongoose
const mongoose = require ('mongoose')

//2. Connecting DB
mongoose.connect("mongodb+srv://Full_Stack_Internship:fullstack@fullstack.z46xgar.mongodb.net/?retryWrites=true&w=majority");

//3. Schema Creation
const Schema = mongoose.Schema;
const admindataSchema = new Schema({
    userName:String,
    userEmail:{type:String,unique:true},
    userPassword:String
});


//4. Model Creation
var adminData = mongoose.model("admin",admindataSchema); 


//5. Exporting Model
module.exports = adminData;  //Exporting Model