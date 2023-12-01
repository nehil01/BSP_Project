const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

const tempelatePath = path.join(__dirname,'../tempelates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views", tempelatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req, res)=>{
    res.render("login")
})

app.get("/signup",(req, res)=>{
    res.render("signup")
})


//FOR SIGNUP
app.post("/signup",async (req, res)=>{

    const data = {
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("login")

})

//FOR LOGIN
app.post("/login",async (req, res)=>{

    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("wrong password")
        }

    }
    
    catch{

        res.send("wrong details")

    }
})

// FOR COMPLAINT

app.post("/submitcomplaint",async (req, res) => {
    const complaintData = {
        complaint: req.body.complaint
    }

    await collection.insertMany([complaintData])
    res.render("complaint", { message: "Complaint submitted successfully!" });
    
})

app.listen(3000,()=>{
    console.log("port connected");
})