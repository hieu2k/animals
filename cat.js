function cat (name){
    this.name = name;
    this.stromatch = [];
}

cat.prototype.eat = function  (mouse) {
    this.stromatch.push(mouse);
}
cat.prototype.show = function  (mouse) {
    console.log(this.stromatch)
}

module.exports = cat;