const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const adminloginRouter = require('express').Router()

const Admin = require('../model/admindataDB')

adminloginRouter.post('/', async (request, response) => {
  const { adminEmail, adminPassword } = request.body
    console.log(adminEmail)
  try{
  const admin = await Admin.findOne({ userEmail : userEmail })
  console.log(`Admin : ${admin}`)
  console.log(`Password : ${admin.adminPassword}`)
  const passwordCorrect = admin === null
    ? false
    : adminPassword === admin.adminPassword

  if (!(admin && passwordCorrect)) {
    return response.status(401).json({
      error: 'Invalid username or password.'
    })
  }
  console.log("Password is ✅")

  const adminForToken = {
    adminEmail: admin.adminEmail,
    id: admin._id,
  }

  const token = jwt.sign(adminForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, admin: admin})
    }
    catch(err){
      console.log(err)
    }
})

module.exports = adminloginRouter