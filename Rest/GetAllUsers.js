var express=require('express');

var app=express();

var fs=require("fs");
//http://localhost:8081/listUsers
app.get('/listUsers',function(req,res){
    fs.readFile("users.json",function(err,data){
        console.log(data);
        res.end(data);
    })
})


//http://localhost:8081/3
app.get('/:id',function(req,res){
    fs.readFile("users.json",function(err,data){
        var users=JSON.parse(data);
        var user=users["user"+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user));
    })
})

var user={
    "user4":{
        "name":"Sonal",
        "password":"tttr",
        "id":8
    }
}
app.post("/addUser",function(req,res){
  fs.readFile("users.json",function(err,data){
      data=JSON.parse(data);
      data["user4"]=user["user4"];
      console.log(data);
      res.send(JSON.stringify(data));

      fs.writeFile("users.json",JSON.stringify(data),function(err){
          if(err)
          {
              console.log(err);
          }
          console.log("Donee")
      })
  })  
})
app.delete('/deleteuser',function(req,res){
    fs.readFile("users.json",function(err,data){
        data=JSON.parse(data);
        delete data["user"+2];
        console.log(data);
        res.send(JSON.stringify(data));
        //homework
    })
})

var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Server is runing on http://%s:%s",host,port);
})