const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    let expDate = new Date(Date.now()+5e3);

    res.cookie(
        "isLoggedIn",
        "true",
        {
            expires:expDate,
            httpOnly:true,
            sameSite:"strict"
        }
    );
    res.send("Cookie Sent.");
});

router.post('/',(req,res)=>{
    res.cookie("isLoggedIn","true");
    res.send("Cookie Sent.");
});

module.exports=router;