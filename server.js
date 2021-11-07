const express =require('express');
const app = express();
require('dotenv').config();

app.get('*' , (req,res)=>{
    res.send('welcome')
});


const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('listining on port 5000')
})