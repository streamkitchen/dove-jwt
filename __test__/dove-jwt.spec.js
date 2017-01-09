
import {certs, keys} from "./certs";
import {DoveJwt} from "../src/dove-jwt";

const failure = function() {
  return Promise.reject("fail!");
}

const reversePromise = function(prom) {
  return new Promise((resolve, reject) => {
    prom.then(reject).catch(resolve);
  });
};

describe("this test framework", function() {
  it("should have working promise helpers", function() {
    return reversePromise(failure());
  });
})

describe("dove-jwt", function() {
  let dove;

  beforeEach(function() {
    dove = new DoveJwt();
  })

  it("should handle basic sign and verify", function() {

  });
});
