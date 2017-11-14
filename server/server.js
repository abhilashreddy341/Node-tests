const express = require('express');

var app = express();

app.get('/',(req,res)=>{
  res.status(200).send({
  error:'status not found',
  name : 'Abhilash'});
});

app.get('/users',(req,res)=>{
  res.send([{
    name : 'Abhilash',
    address : 'Kansas City'
  },
  {
    name : 'Rahul',
    address: 'Dallas'
  }])
});

app.listen(3000,()=>{
  console.log('server is up on port 3000');
})

module.exports.app = app ;
