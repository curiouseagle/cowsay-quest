let data = require("./information");
console.log(data);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je suis ${data[0].firstName} du campus de ${data[0].campus}`,
    e : "oO",
    T : "U "
}));