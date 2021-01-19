const mysql = require('mysql');
const bodyparser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyparser.json());
//create server
app.listen(3000,()=>{console.log("Server running at 3000!!")});

//create mysql connection
var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'cbit'
});
//connect to database
mysqlConnection.connect((err)=>{
    if(!err){
      console.log('Connection to the mysql database successful!');
    }
    else{
      console.log('Error connecting to the mysql database!');
    }
});

//create routes
//get routes
app.get("/products",(req,res)=>{
  mysqlConnection.query("",(err,rows)=>{
     if(!err){
     res.send(rows);
     }
     else{
       res.send("Error encountered!!");
     }
    });
  });
//get routes with id
app.get("/products:id",(req,res)=>{
    mysqlConnection.query("",(err,rows)=>{
      if(!err){
        res.send(rows);
      }
      else{
        res.send("Error encountered!!");
      }
    });
});
//delete route
app.delete("products/id",(req,res)=>{
     mysqlConnection.query("",(err,rows)=>{
       if(!err){
         res.send(rows);
       }
       else{
         res.send("Error encountered!!");
       }
     });
});
//insert route
app.post("",(req,res)=>{
  mysqlConnection.query("",(err,rows)=>{
    if(!err){
      res.send(rows);
    }
    else{
      res.send("Error encounterd!!");
    }
  });
});
//update route
app.put("/",(req,res)=>{
    mysqlConnection.query("",(err,rows)=>{
      if(!err){
        res.send("Successful");
      }
      else{
        res.send("Not successful");
      }
    });

});
