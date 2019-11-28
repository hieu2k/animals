var Chalk = require('chalk');

function dog(name){
    this.name = name;
}

dog.prototype.sayHi = function () {
    console.log('Hello I is a dog, My name is ' + Chalk.red(this.name));
}

module.exports = dog;