var Mouse = require('./mouse');

function cat (name){
    this.name = name;
    this.stomatch = [];
}

cat.prototype.eat = function  (animal) {
    if(animal instanceof Mo)
    this.stomatch.push(mouse);
}

module.exports = cat;