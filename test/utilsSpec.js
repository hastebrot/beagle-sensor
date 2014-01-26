var expect = require("chai").expect
var Utils = require("../src/utils")
var moment = require("moment")

describe("Utils", function() {

  describe("createTimestamp()", function() {
    it("should create timestamp", function() {
      expect(Utils.createTimestamp()).not.to.eql(null)
    })
  })

  describe("startOfDay()", function() {
    it("should create start of day", function() {
      var current = moment("2004-05-06 07:08:09").toDate()
      var start = moment("2004-05-06 00:00:00").toDate()
      expect(Utils.startOfDay(current).toDate()).to.eql(start)
    })
  })

})
