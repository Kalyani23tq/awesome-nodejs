var mongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbase=db.db("Student");
    var Stud1={id:2,name:"nikhil",age:25,marks:80};
    dbase.collection("stud").insertOne(Stud1,function(err,res){
        if(err)throw err;
        console.log("Recored is inserted")

        db.close();
        //homework insermany
    })
})