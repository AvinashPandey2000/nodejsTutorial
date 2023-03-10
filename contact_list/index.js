const assert = require('assert');
const express= require('express');

const db=require('./config/mongoose')       //Main file me connnection establish kr ne liye
const Contact=require('./models/contact')   //Main file me schema use kr ne k liye


const app= express();
const path =require('path');                           

const port=8000;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());      //request data ko check kr ne k liye
app.use(express.static('assest'))   // static file ko link kre ga  taki css and js ko use kr ske (css me link kre ge tho direct / lga kr css file ko link kre ge)


//middle ware practice
app.use(function(req,res,next){
        console.log("middle ware called");
        next();
})

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
    

    // MONGOOS : GET  data from the mongos

    Contact.find({},function (err,dbData) {
        if(err){
            console.log(`Error will fatching data ${err}`); return;
        }

        return res.render('work',{
            title:"my Work",
            contactList: dbData
        })

    })
   
})

// app.get('/contact',function(req,res){
//     res.render('./index.html');
// });

app.post('/create-contact',function(req,res){
        console.log(req.body)
        // contactList.push({
        //     name:req.body.name,
        //     phone:req.body.number
        // })

                                             // MONGOOS :send data to mongo
        Contact.create({
            name:req.body.name,
            phone:req.body.number
        },function(err,newcontact){
            if(err){
                console.log(`error while creating server ${err}`); return;
            }

            console.log(newcontact);
            return res.redirect('back');
        })


        // return res.redirect('back');   // it work same is /work becuse whene we want to redirect to the same page the we use like this.    or  return res.redirect('/work'); 
})

app.get('/delete-contact/',function(req,res){
    // let phone=req.params.phone;
    let id =req.query.id;               // get the id from the backhand

    Contact.findByIdAndDelete(id, function(err){   // apply mongo filter to find and delete
        if(err){
                console.log(`error will delete : ${err}`); return;
        }
        return res.redirect('back');            // back to the original position
    })

}) 

// creating server
app.listen(port, function(err){
    if(err){
        console.log(`Error while creating  server ${err}`);
    }

    console.log(`Server is running on port ${port}`);
})