const {Router} = require('express')
const index = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

index.get('/',(req,res)=>{
    res.render("firstIndex",{messages:messages})
})
index.get('/new',(req,res)=>{
  res.render('form')
})

index.post('/new',(req,res)=>{
  messages.push({text:req.body.message,user:req.body.name,added:new Date()})
  // res.render('firstIndex',{messages:messages})
  res.redirect("/")
})
index.get('/new/:userId',(req,res)=>{
  const {userId} = req.params;
  res.render('message',{userId:userId})
})

module.exports = index