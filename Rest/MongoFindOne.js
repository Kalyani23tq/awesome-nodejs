var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbase=db.db("Student");

    var query={age:23}
    dbase.collection("stud").find(query).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })
    //homework findOne,update query
})