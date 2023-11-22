//server initiation
const express=require('express');
const app = express();

//use to parse req.body in express ->PUTorPOST
const bodyparser=require('body-parser');

//specifically parse JSON data & add it to request.body object
app.use(bodyparser.json());



//activating the server on local port 3000
app.listen(3000, () => {
    console.log("server started at port 3000")
});
//routes
app.get('/',(req,res)=>{
    res.send("hello how are u")
})
app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted successfully");
})