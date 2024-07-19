const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.end();
});

app.listen(PORT,"0.0.0.0",()=>console.log(`Express app is running on PORT : ${PORT}`));