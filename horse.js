function horse (name) {
    this.name = name;
}
horse.prototype.run = function() {
    console.log("Hey you see i runnig, my nam is" + this.name);
}
module.exports = horse;