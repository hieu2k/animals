function mouse (name, weight) {
    this.name = name;
    this.weight = weight;
    this.dead = false;
}

mouse.prototype.die = function () {
    this.dead = true;
}

module.exports = mouse;