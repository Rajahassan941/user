const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
name:{
    type:String,
    required:[true,'please add a name']
},
username:{
    type:String,
    required:[true,'please add a username']
},
email:{
    type:String,
    required:[true,'please add a email'],
    unique:true
},
phone:{
    type:String,
    required:[true,'please add a name']
},
password:{
    type:String,
    required:[true,'please add the phone number'],
    maxlength: 10,
}
},{
    timestamps:true
}) 
module.exports=mongoose.model('User',userSchema)