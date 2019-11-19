const assert = require ('assert')
const Paint = require ('../paint.js')

describe('Paint',function(){
  let paint1;
  let paint2;
  beforeEach(function(){
    paint1 = new Paint(20)
    paint2 = new Paint(0)

  });
  // - have a number of litres of paint
  it('should have a number of litres of paint',function(){
    const actual = paint1.amount;
    assert.strictEqual(actual, 20);
  });
  // - be able to check if it is empty
  it('should be able to check if it is empty - not empty',function(){
    const actual = paint1.checkEmpty();
    assert.strictEqual(actual, false);
  });

  it('should be able to check if it is empty - empty',function(){
    const actual = paint2.checkEmpty();
    assert.strictEqual(actual, true);
  });
  // - be able to empty itself of paint
  it ('should be able to empty itself of paint  - not empty',function(){
    paint1.usePaint(10);
    const actual = paint1.amount;
    assert.strictEqual(actual, 10);
  });

  // - be able to empty itself of paint
  it ('should be able to empty itself of paint - empty',function(){
    paint1.usePaint(20);
    const actual = paint1.checkEmpty();
    assert.strictEqual(actual, true);
  });


});
