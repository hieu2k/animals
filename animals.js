function animals (animal){
    this.zoo = [];
}

animals.prototype.has = function(animal) {
    this.zoo.push(animal);
}
module.exports = animals;