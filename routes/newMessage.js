const {Router} = require('express');
const newMessage = Router();


newMessage.get('/new/:messageId',(req,res)=>{
    res.render('newMessage',{messages:messages})
})

module.exports = newMessage