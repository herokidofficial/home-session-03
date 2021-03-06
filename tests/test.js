var jasmine = require('jasmine');
var myApp = require('../app/index.js');

describe("Find missing number two lists: ", function() {

  describe("Case for en empty list", function() {

    it("should return 0 for empty list", function() {
      expect(myApp.findMissing([], [])).toEqual(0);
    });

  });

  describe("Case for lists with the same entries", function() {

    it("should return 0 for [2],[2]", function() {
      expect(myApp.findMissing([2], [2])).toEqual(0);
    });

    it("should return 0 for [4],[4]", function() {
      expect(myApp.findMissing([4], [4])).toEqual(0);
    });

    it("should return 0 for [7],[7]", function() {
      expect(myApp.findMissing([7], [7])).toEqual(0);
    });

  });

  describe("Case for lists with similar entries and a missing number", function() {

    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(myApp.findMissing([1, 2], [1, 2, 5])).toEqual(5);
    });

    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(myApp.findMissing([4, 6, 8], [4, 6, 8, 10])).toEqual(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(myApp.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).toEqual(1);
    });

  });
  describe("Case for missing number in each of the arrays", function() {

    it("should return [1, 3] for [1, 2, 5], [2, 5, 3]", function() {
      expect(myApp.findMissing([1, 2, 5], [2, 5, 3])).toEqual([1, 3]);
    });

    it("should return [4, 9] for [5, 7, 4], [5, 7, 9]", function() {
      expect(myApp.findMissing([5, 7, 4], [5, 9, 7])).toEqual([4, 9]);
    });
  });

  describe("Case for missing number in first array but none in second array", function() {

    it("should return 0 for [1, 2, 5], [2, 5]", function() {
      expect(myApp.findMissing([1, 2, 5], [2, 5])).toEqual(0);
    });

    it("should return 0 for [5, 7, 4], [5, 7]", function() {
      expect(myApp.findMissing([5, 7, 4], [5, 7])).toEqual(0);
    });
  });

});