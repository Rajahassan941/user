const express=require('express')
const router=express.Router()
const {registerUser,loginUser,getUser}=require('../controller/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.post('/getUser',protect,getUser)
 

module.exports=router