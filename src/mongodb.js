const mongoose = require("mongoose")

//TO CONNECT DATABASE - const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/db_name";      
mongoose.connect("mongodb+srv://nehilch16:kaneki%4001@cluster0.hzouoat.mongodb.net/LoginSignUp")

.then(() =>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    complaint:{
        type: String,
    }
    
})


const collection = new mongoose.model("Collection1", LogInSchema)


module.exports = collection