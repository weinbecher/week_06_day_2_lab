const Paint = function(amount){
  this.amount = amount;

}


// Paint.prototype.paintAmount = function(){
//   return this.amount;
// }


Paint.prototype.checkEmpty = function(){
   if (this.amount == 0){
     return true;
   }
   else {
     return false;
   }
}


Paint.prototype.usePaint = function(amountUsed){
  this.amount -= amountUsed;
  return this.amount;
};


module.exports = Paint;
