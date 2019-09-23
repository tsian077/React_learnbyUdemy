const express = require('express')
const path =require('path')
app=express()

app.use(express.static(path.join(__dirname, 'build')));

app.get('/',(res,req)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.listen(3000,()=>{
  console.log('3000')  
})
