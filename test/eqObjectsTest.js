const assert = require('chai').assert;

const eqObjects = require('../eqObjects');


//TEST CODE BELOW

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


describe("#eqObjects", () => {
  it("returns true for (cd, dc)", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("returns false for (cd, cd2)", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});