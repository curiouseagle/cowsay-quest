let data = require("./information");
console.log(data);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je suis ${data.firstName} du campus de ${data.campus}`,
    e : "oO",
    T : "U "
}));