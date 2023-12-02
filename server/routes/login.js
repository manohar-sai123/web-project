const express = require("express")
const User = require("../models/login")
const router = express.Router()


router.get('/getAllUsers', (req, res) => {
    try {
      const users = User.getUsers();
      res.send(users)
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  
  module.exports = router;
