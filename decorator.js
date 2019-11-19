const Decorator = function() {
  this.stock = []
};

Decorator.prototype.addCan = function(paint){
  this.stock.push(paint);
  return this.stock;
};


Decorator.prototype.countStock = function(){
  var total = 0;
  for (let paint of this.stock ){
    let amount = paint.amount;
    total += amount;
  }
  return total;
};




// for (var key in movie) {
//   var value = movie[key];
//   console.log(`The ${key} is ${value}`);
// }
//


module.exports = Decorator;
