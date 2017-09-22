const {createServer}= require("http");
const express = require("express");
const compression= require("compression");
const path=require("path");


const app = express();
const dev= app.get("env") !== "production"
const normalizePort= port => parseInt(port, 10);
const PORT= normalizePort(process.env.PORT || 5000);

if(!dev){

    app.disable("x-powered-by");
    app.use(compression());
    app.use(express.static(path.resolve(__dirname, "build")));
    app.get("*", (req,res)=>{
            res.sendFile(path.resolver(__dirname, "build", "index.html"));

    });

}

const server= createServer(app);
server.listen(PORT, err=>{
if(err) throw err;
console.log("Server Started!!");

});