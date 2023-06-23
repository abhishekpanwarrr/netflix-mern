const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const verify = require("../verifyToken")

//UPDATE
router.put("/:id",verify, async(req,res) =>{
    console.log("id",req.params.id);
    if(req.user.id === req.params.id || req.user.isAdmin ){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
              ).toString()
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true})
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }else{
        res.status(403).json({message: "You can update only your account"})
    }

})
//DELETE
//GET
//GET ALL
//GET USRES STATS


module.exports = router