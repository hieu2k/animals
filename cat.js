function cat (name){
    this.name = name;
    this.stomatch = [];
}

cat.prototype.eat = function  (mouse) {
    this.stomatch.push(mouse);
}
cat.prototype.show = function  (mouse) {
    console.log(this.stomatch)
}

module.exports = cat;