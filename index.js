var Mouse = require('./mouse');
var Cat = require('./cat');
var Dog = require('./dog');
var micky = new Cat();


var  mouse1 = new Mouse("Dog", 19);

micky.eat(mouse1);
mouse1.die();
micky.show(mouse1);

var dog = new Dog('Tom');
dog.sayHi();