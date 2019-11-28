var Mouse = require('./mouse');
var Cat = require('./cat');
var Dog = require('./dog');


var cat = new Cat('micky');
var  mouse = new Mouse("Dog", 19);
var dog = new Dog('Tom');

try{
    cat.eat(dog);
    console.log(cat);
} catch (err){
    console.log("Error While cat eating a dog ? bushit. ");
}