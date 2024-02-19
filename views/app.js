const express=require('express')
const router=require('../routes/routerPost')
 app=express()
port=3000
 
app.use(express.json())
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next()
    
  });
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Internal Server Error');
  });

app.use('/',router)
app.listen(port,()=>{
    console.log("server created")
})