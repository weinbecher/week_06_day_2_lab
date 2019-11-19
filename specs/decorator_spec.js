const assert = require ('assert')
const Decorator = require ('../decorator.js')
const Room = require ('../room.js')
const Paint = require ('../paint.js')


describe( 'Decorator', function(){
  let decorator;
  beforeEach(function(){
    decorator = new Decorator;
    room = new Room(100,0);
    paint1 = new Paint(20);
    paint2 = new Paint(100);
  });

  // - start with an empty paint stock
  it('should start with an empty paint stock',function(){
    const actual = decorator.stock.length
    assert.strictEqual(actual, 0)
  });

  // - be able to add a can of paint to paint stock
  it('should be able to add a can of paint to paint stock',function(){
    decorator.addCan(paint1);
    const actual = decorator.stock.length
    assert.strictEqual(actual, 1)
  });

  // - be able to calculate total litres paint it has in stock
  it('should be able to calculate total litres paint it has in stock',function(){
    decorator.addCan(paint1);
    const actual = decorator.countStock();
    assert.strictEqual(actual, 20);
  });


  // - be able to calculate whether is has enough paint to paint a room

  // - be able to paint room if has enough paint in stock

  it('should be able to calculate whether is has enough paint to paint a room',function(){
    decorator.addCan(paint1);
    decorator.addCan(paint2);
    const actual = decorator.countStockForRoom(room);
    assert.strictEqual(actual, true);
  });

});
