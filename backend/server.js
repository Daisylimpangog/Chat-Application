const express = require("express");

const cors = require("cors");

const app = express();

const jwt = require("jsonwebtoken")

const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "chat_db"
});

app.use(express.json());
app.use(cors());


const isAuthenticated = (req, res, next) =>{
    const token = req.header("Authorization");

    jwt.verify(token, "d2c7eae4b025a186db0f1c8490c946a9f50e5a4a3c08e769a93d22f3785bbf3d", (err, user) => {
        if (err) {
          return res.status(403).json({ code_number: 403, message: "Forbidden: Invalid token" });
        }
    
        req.user = user;

        next();
      });
}


app.post('/login', (req,res)=>{
    const { email, password}  = req.body;

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    con.query(sql, [email, password], (err, result) =>{


        if(!err){
            if(result.length > 0){
                const token = jwt.sign({ user_id: result.id }, "d2c7eae4b025a186db0f1c8490c946a9f50e5a4a3c08e769a93d22f3785bbf3d", { expiresIn: "24h" });
                return res.status(200).json({success:true,data: result, token: token});
            }
            return res.status(200).json({message: "Invalid username or password", codeNumber: 0});
        }

        return res.status(500).json({message: "Server Error"});

    });
})


app.post('/register', (req,res)=>{

    const {birthday,email,fullname,gender,password,user_name} = req.body;

    const sql = "INSERT INTO users(user_name, email, password, fullname, birthday, gender) VALUES(?, ?, ?, ?, ?, ?)";

    con.query(sql, [user_name,email,password,fullname,birthday,gender], (err, result) =>{

        if(!err){
            return res.status(200).json({success:true,message: "Registered successfully"});
        }

        return res.status(500).json({success:false,message: err});

    });
})




app.listen(5000, ()=>{
    console.log("Server Running On Port 5000");
});
