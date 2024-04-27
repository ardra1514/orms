const { response } = require("express");

const  signupController =async (req,res) =>{
    try{
        const existinguser = await userModel.findOne({email:req.body.email});
        if(existinguser ){
            return res
               .status(200)
               .send({message:"user already exist",success:false});
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({message:"register successfully",success:true });


    }
    catch(error){
        console.log(error)
        res 
            .status(500)
            .send({
                success:false,
                message:`register controller ${error.message}`,
            });

    }
};
const loginController =() =>{}
module.exports={signupController,loginController};

