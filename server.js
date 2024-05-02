const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const usermodels = require('./models/usermodels')
const facultymodels = require('./models/Facultymodel')

const categorymodels = require("./models/categorymodel")

const app = express()

app.use(express.json())
app.use(cors(
{
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true


}))

app.use(cookieParser())

mongoose.connect("mongodb+srv://ardraap4321:EHF71YV5ZH5ZGUWP@cluster0.b65b3vw.mongodb.net/onlinerequestdb?retryWrites=true&w=majority&appName=Cluster0")

const varifyUser =(req,res,next) =>{
        const token = req.cookies.token;
        if(!token){
            return res.json('token is missing')
        }else{
            jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
                if(err)
                {
                    return res.json('error with token')
                }else{
                    if(decoded.role === "admin"){
                        next()

                    }else{
                        return res.json('not admin')
                    }
                }
            })
        }
}

app.get('/dash',varifyUser,(req,res) => {
    res.json("success")
})


app.post('/',(req,res) => {
    const {email,password} =req.body;
    usermodels.findOne({email:email})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,(err,result) => {
                if(result){
                    const token = jwt.sign({ email: user.email, role: user.role },
                         "jwt-secret-key", { expiresIn: '1d' })
                        res.cookie('token',token)
                        return res.json({Status:"success",role:user.role})
                }else{
                    return res.json({ Status:false,Err:'the password is incorrect'})
                    // alert('the password is incorrect')
                }
            })
            
        }else {
            return res.json("no record existed")
        }
    })

})


app.post('/addstudent',(req,res) => {
    const {name,email,department,year,password}=(req.body)
    bcrypt.hash(password,10)
    .then(hash => {
        usermodels.create({name,email,department,password:hash})
        .then(user => res.json("success"))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
    

})

        app.get('/getUsers',(req,res) => {
            usermodels.find()
            .then(users => res.json(users))
            .catch(err => res.json(err))
        })
        app.delete("/delete/:id", async (req,res) => {
            let id = req.params.id;
            let data = await Students.findByIdAndDelete(id)
            .then(()=>{
        
                res.json("Data removed Successfully");
        
            })
            .catch(() => {
                res.json("Failed deleteing data");
        
            });
            
        });

app.post('/applyrequest',(req,res) => {
            const {name,email,department,year,password,subject,content}=(req.body)
        
            
            facultymodels.create({name,email,department,year,subject,content})
            .then(users => res.json(users))
            .catch(err => res.json(err))
            
        
        })
        app.get('/getrequest',(req,res) => {
            
            facultymodels.find()
            .then(users => res.json(users))
            .catch(err => res.json(err))
        })


            // Import necessary modules and setup your app

// Middleware to verify JWT token and extract user information
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        req.user = decoded; // Extracted user information from token
        next();
    });
};

// Route to get user profile
app.get('/profile', verifyToken, (req, res) => {
    // Assuming you have the email or ID of the user in req.user
    const userEmail = req.user.email; // Extracting email from token

    // Query user profile from the database using userEmail
    usermodels.findOne({ email: userEmail })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            // If user profile found, send it as response
            res.json({ profile: user });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        });
});







       

app.listen(4000,() => {
    console.log("server is running")
})