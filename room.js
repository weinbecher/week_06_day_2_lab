const Room = function(area, painted_area) {
  this.area = area
  this.painted_area = painted_area
};



// Work on the assumption that one litre of paint covers one square meter

Room.prototype.paintRoom
=function (paint) {
  this.painted_area = paint * 1;
  return this.painted_area;
};


module.exports = Room;
