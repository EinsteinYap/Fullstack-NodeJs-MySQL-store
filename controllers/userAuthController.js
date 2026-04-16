const Users = require("../models/users");
const JWT = require('jsonwebtoken');
const { tokenSignature } = require("../utils/globals");
const bcrypt = require('bcrypt');

exports.renderSignUp = (req,res)=>{
    res.render('sign-up', {isLoggedIn : global.isLoggedIn});
}

exports.registerUser = async (req,res)=>{
    const {userName,password,confirmPassword} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const users = new Users(null,userName,hashedPassword);

    users.insertUser()
        .then(()=>{
            res.redirect('/');
        })
}

exports.renderLogin = (req,res)=>{
    res.render("login", {isLoggedIn : global.isLoggedIn});
}

exports.validateLogin = (req,res)=>{
    const {userName,password} = req.body;

    Users.fetchUserByUsername(userName)
        .then(([ [userCredentials], tInfo ])=>{
            if(userCredentials){
                const isMatch = bcrypt.compare(userCredentials.password, password);

                if(isMatch){
                    const token = JWT.sign(
                        {userName},
                        tokenSignature
                    )
                    req.session.token = token;
                    res.redirect('/');
                }else{
                    res.redirect('/login');
                }
            }else{
                res.redirect('/login');
            }
        })
}

exports.logout = (req,res)=>{
    req.session.destroy(req.session.id);
    res.redirect('/');
}