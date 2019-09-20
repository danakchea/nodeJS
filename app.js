// const {sum, substract} = require('./helper');

// const sumTotal = sum(1100,12);
// const sumSubstract = substract(1100,12);

// console.log("Sum : " + sumTotal);
// console.log("Substract: " + sumSubstract);

//create your own server
// const http = require('http');
// const server = http.createServer((request,response) => {
//     response.end("Hello world from node js");
// });
// server.listen(3000);

//Play with express npm i express
// const express = require('express');
// const app = express();

// app.get('/',(request,response) => {
//     response.send("Yo!! what's up? This is express");
// });

// app.listen(3000);

//File System
const fs = require('fs');
const fileName = "target.txt";

//sync
const data = fs.readFileSync(fileName)
console.log(data.toString());
// Async
// fs.readFile(fileName,(err,data)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(data.toString());
// });
console.log('2');