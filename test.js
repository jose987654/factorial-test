var assert = require("assert");
const factorial = require("./Factorial");

describe("Factorial Function unit tests", () => {
  // Test 1 :
  it("TEST 1", () => {
    assert.equal(factorial(0), 1);
  });

  // Test 2 :
  it("TEST 2", () => {
    assert.equal(factorial(5), 120);
  });

  // Test 3 :
  it("TEST 3", () => {
    assert.equal(factorial(3), 6);
  });

  // Test 4 :
  it("TEST 4", () => {
    assert.equal(factorial(4), 24);
  });

  // Test 5 :
  it("TEST 5", () => {
    assert.equal(factorial(6), 720);
  });
});
