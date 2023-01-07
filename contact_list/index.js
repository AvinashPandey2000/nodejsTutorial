const express= require('express');
const app= express();
const path =require('path');                     

const port=8000;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',function(req,res){
    console.log(req.url)
    //   res.send('<h1> Cool it is running  </h1>');
   res.render('home',{title:"My Contact List"});
});

app.get('/work',function(req,res){
    console.log(req.url);
    return res.render('work',{
        title:"my Work",
        myloop:5
    })
})

// app.get('/contact',function(req,res){
//     res.render('./index.html');
// });


// creating server
app.listen(port, function(err){
    if(err){
        console.log(`Error while creating  server ${err}`);
    }

    console.log(`Server is running on port ${port}`);
})