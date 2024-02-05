const mongoose= require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})


Schema = mongoose.Schema({
    uname:String,
    pass:String
})

StudentModel = mongoose.model("Student",Schema);
module.exports = StudentModel




