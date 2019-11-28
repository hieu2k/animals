var Mouse = require('./mouse');
var Cat = require('./cat');
var Dog = require('./dog');


var cat = new Cat('micky');
var  mouse1 = new Mouse("Dog", 19);
cat.eat(mouse1);
mouse1.die();
cat.show(mouse1);

var dog = new Dog('Tom');
dog.sayHi();
dog.eat(cat);
console.log(dog);