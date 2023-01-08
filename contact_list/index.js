const express= require('express');
const app= express();
const path =require('path');                     

const port=8000;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());      //request data ko check kr ne k liye

// contact List 
var contactList =[
    {
        name:"abhay",
        phone:"6265016727"
    },
    {
        name:"anand",
        phone:"1111111111"
    },
    {
        name:"avinash",
        phone:"8770094580"
    }
]


app.get('/',function(req,res){
    console.log(req.url)
    //   res.send('<h1> Cool it is running  </h1>');
   res.render('home',{title:"My Contact List"});
});

app.get('/work',function(req,res){
    console.log(req.url);
    
    return res.render('work',{
        title:"my Work",
        contactList: contactList
    })
})

// app.get('/contact',function(req,res){
//     res.render('./index.html');
// });

app.post('/create-contact',function(req,res){
        console.log(req.body)
        contactList.push({
            name:req.body.name,
            phone:req.body.number
        })
        // return res.redirect('/work');  
        return res.redirect('back');   // it work same is /work becuse whene we want to redirect to the same page the we use like this.
})

app.post('/delete',function(req,res){
    contactList.pop();
    return res.redirect('back');
})

// creating server
app.listen(port, function(err){
    if(err){
        console.log(`Error while creating  server ${err}`);
    }

    console.log(`Server is running on port ${port}`);
})