const http=require('http')
const port=8000;

//step 2:  pass the handeler to the server
function requestHandler(req,res){
    console.log(`url : ${req.url}`);

    
    res.end('response end !');
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