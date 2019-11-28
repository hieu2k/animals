var Chalk = require('chalk');

function dog(name){
    this.name = name;
    this.stomach = [];
}

dog.prototype.sayHi = function () {
    console.log('Hello I is a dog, My name is ' + Chalk.red(this.name));
}

dog.prototype.eat = function (cat) {
    this.stomach.push(cat);
}
module.exports = dog;