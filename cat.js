var Mouse = require('./mouse');

function cat (name){
    this.name = name;
    this.stomatch = [];
}

cat.prototype.eat = function  (animal) {
    if(animal instanceof Mouse){
        animal.die();
        this.stomatch.push(animal);
    }else {
        throw new Error ("What happen? cat eat dog ?????");
    }
}

module.exports = cat;