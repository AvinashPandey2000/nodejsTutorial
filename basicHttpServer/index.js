const http=require('http')     //http ki method use  kr ne k liye
const port=8000;
const fs=require('fs');        // html file use kr ne k liye

//step 2:  pass the handeler to the server
function requestHandler(req,res){
    console.log(`url : ${req.url}`);

    // send the response
    res.writeHead(200,{'content-type':'text/html'});

    fs.readFile('./index.html', function(err,data){        // data k under index.html ka all data aayega
        if(err){
            console.log(`Error !  ${err}`);
          return  res.end(`<h1> Error !  ${err} </h1>`);
        }

        return res.end(data);    // data ko how kr ne k liye
    });
    
}


//  step1: creating the server
const server=http.createServer(requestHandler);
server.listen(port,(err)=>{
    if(err){
        console.log("server failed to load");
        return;
    }
    console.log(`server was created at port : ${port}`);
})