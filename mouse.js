function mouse (name, weight) {
    this.name = name;
    this.weight = weight;
    this.dead = false;
}

mouse.prototype.die = function () {
    this.dead = true;
}

mouse.prototype.run = function() {
    console.log("Run when i see cat");
}

module.exports = mouse;