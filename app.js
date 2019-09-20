const {sum, substract} = require('./helper');

const sumTotal = sum(1100,12);
const sumSubstract = substract(1100,12);

console.log("Sum : " + sumTotal);
console.log("Substract: " + sumSubstract);

//create your own server
const http = require('http');
const server = http.createServer((request,response) => {
    response.end("Hello world from node js");
});
server.listen(3000);