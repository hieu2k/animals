function mouse (name, weight) {
    this.name = name;
    this.weight = weight;
    this.dead = false;
}

mouse.prototype.die = function () {
    this.dead = true;
}

mouse.prototype.eat = function () {
    console.log('I want eat any time and any day.');
}
mouse.prototype.run = function() {
    console.log("Run when i see cat");
}

module.exports = mouse;