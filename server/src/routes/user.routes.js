const express = require("express")
// const {Router} = require("express");
const {  loginUser, signupUser } = require("../Controllers/User.controller");

const userRoute = express.Router();

userRoute.post("/register", signupUser);
userRoute.post("/login", loginUser);



module.exports = {
    userRoute
};