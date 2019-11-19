const assert = require ('assert')
const Room = require ('../room.js')

describe('Room', function() {
  let room;
  beforeEach(function(){
    room = new Room(100,0);
  });
  // - have an area in square meters

  it('should have an area in square meters', function(){
    const actual = room.area
    assert.strictEqual(actual, 100);
  });

  // - should start not painted

  it('should start not painted', function(){
    const actual = room.painted_area
    assert.strictEqual(actual, 0);
  });

  // - should be able to be painted

  it('should be able to be painted', function(){
    room.paintRoom(30);
    const actual = room.painted_area;
    assert.strictEqual(actual, 30);
  });


});
