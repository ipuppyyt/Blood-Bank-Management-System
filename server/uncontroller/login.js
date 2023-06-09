const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const User = require('../model/userdataDB')

loginRouter.post('/', async (request, response) => {
  const { userEmail, userPassword } = request.body
    console.log(userEmail)
  try{
  const user = await User.findOne({ userEmail : userEmail  })
  if(!user){
    response.send("User not found");
    }
  console.log(`User : ${user}`)
  console.log(`Password : ${user.userPassword}`)
  const passwordCorrect = user === null
    ? false
    : userPassword === user.userPassword

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'Invalid username or password.'
    })
  }
  console.log("Password ✅")

  const userForToken = {
    userEmail: user.userEmail,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, user: user})
    }
    catch(err){
      console.log(err)
      response.send("Caught Error : User not found");
    }
})

module.exports = loginRouter