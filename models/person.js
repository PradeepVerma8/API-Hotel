const mongoose = require('mongoose')

const personSchema =new mongoose.Schema({
name:{
    type:String,
    required: true
},

age:{
    type:Number
},

work:{
    type:String,
    enum:['saif','waiter','person'],
    required:true
},

mobile:{
    type:Number,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
address:{
    type:String
},
salary:{
    type:Number,
    required:true
}

})

const person =mongoose.model('person',personSchema)
module.exports = person;