var assert = require("chai").assert;
var Hello = require("../app/hello");

// Don't edit this file.


describe("test1", function() {
  it("a", function() {
    assert(Hello.hello("a"), "Hello a");
  });
  it("bb", function() {
    assert(Hello.hello("bb"), "Hello bb");
  });
});
