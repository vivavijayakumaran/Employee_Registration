const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const sql = require("mysql2");

app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"vivavk",
    database:"employee"
})

app.get('/getusers',(req,res)=>{
    const sql="SELECT * from emp";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(port, console.log("Listening"));
