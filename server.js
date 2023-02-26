const express = require("express");
const app = express();
const nodemailer = require('nodemailer');

const club = "hack club event is on the gogle form is s";

const bp = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(urlencoded({extented : true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var posts = [];

app.get("/",function(req,res){
 res.sendFile(__dirname+"/home.html");
})
app.get("/home.html",function(req,res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/aboutus.html",function(req,res){
    res.sendFile(__dirname+"/aboutus.html");
   });
app.get("/login.html",function(req,res){
    res.sendFile(__dirname+"/login.html");
   });
app.get("/adminlogin.html",function(req,res){
    res.sendFile(__dirname+"/adminlogin.html");
   });
//    important
app.get("/Events",function(req,res){
    res.render("Events",{
        para:club,
        posts: posts
    });
    console.log(posts);
});
app.get("/Eventupdates",function(req,res){
    res.render("Eventupdates");
});
app.get("/sdashboard",function(req,res){
    res.render("sdashboard");
});
app.get("/sdashboard",function(req,res){
    res.render("sdashboard");
});
app.get("/Paynow",function(req,res){
    res.render("Paynow");
});
app.post("/student",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "1234" && spwd == "1234"){
        res.render("sdashboard",{username : sname});
    }
    else{
        res.send("Incorrect Pwd");
    }
});
app.post("/admin",function(req,res){
    var sname = req.body.user;
    var semail = req.body.mail;
    var spwd = req.body.pwd; 
    console.log(semail+" "+spwd);
    if(semail == "1234" && spwd == "1234"){
        res.render("adashboard",{username : sname});
    }
    else{
        res.send("Incorrect Pwd");
    }
});
app.post("/Eventupdates",function(req,res){
    var title = req.body.tname;
    var date = req.body.edate;
    var des = req.body.edes;
    var reg = req.body.eform;
    var ddate = req.body.ldate;

    const post = {
        tname : title,
        edate : date,
        edes : des,
        eform : reg,
        ldate : ddate
    };
    posts.push(post);
    var emailq = req.body.email;

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    service: 'gmail',
    auth: {
      user: 'vivekmalla123@gmail.com',
      pass: 'qvpzqipimymozzeu'
    }
  })
  let info = transporter.sendMail({
    from: 'vivekmalla123@gmail.com',
    to: emailq,
    subject: 'Verfication Successfully',
    text: "Your Details are Verified"
  })
    if(
         title == 719725150925 &&
         date == 25000 &&
         des == "ODOPS1310A" &&
         reg == "Vivek" &&
         ddate == 'Hexatech'
    ){
        res.sendFile(__dirname+"/eventadded.html");
    }
    res.sendFile(__dirname+"/home.html");
});
// app.post("/added", async(req,res)=>{
    
//     var emailq = req.body.email;

// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     service: 'gmail',
//     auth: {
//       user: 'vivekmalla123@gmail.com',
//       pass: 'nztvmttogtgpjvno'
//     }
//   })
//   let info = transporter.sendMail({
//     from: 'vivekmalla123@gmail.com',
//     to: emailq,
//     subject: 'Event Added Successfully',
//     text: "Your event is succesfully added"
//   })

//     res.sendFile(__dirname+"/eventadded.html");


// });
app.listen(9555,function(){
    console.log("Server is running sucessfully at LocalHost:9800");
});