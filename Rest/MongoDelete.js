var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
mongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbase=db.db("Student");
    var query={age:25};
    dbase.collection("stud").deleteOne(query,function(err,res){
        if(err)throw err;
        console.log("Deleted record")
    })

    //homework deleteMany
})