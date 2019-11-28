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
module.exports = mouse;