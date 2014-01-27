var expect = require("chai").expect
var dbConnection = require("./dbConnection")
var Sensor = require("../../src/models/sensor")
var Utils = require("../../src/utils")
var moment = require("moment")

describe("Sensor", function() {
  dbConnection()

  describe("save()", function() {
    it("should save sensor", function(done) {
      var sensor = new Sensor({
        temperature: 20.7,
        humidity: 70.2
      })
      var preSaveTimestamp = Utils.createTimestamp()
      sensor.save(function(err, sensor) {
        if (err) done(err)

        expect(sensor.timestamp).to.be.gte(preSaveTimestamp)
        expect(sensor.temperature).to.equal(20.7)
        expect(sensor.humidity).to.equal(70.2)

        done()
      })
    })
  })

  describe("findByDay()", function() {
    beforeEach(function(done) {
      var timestamp = moment("2004-05-06 07:08:09")
      var sensor = new Sensor({
        timestamp: timestamp.unix(),
        temperature: 20.7,
        humidity: 70.2
      })
      sensor.save(done)
    })

    it("should find sensors per day", function(done) {
      var day = moment("2004-05-06")
      Sensor.findByDay(day, function(err, sensors) {
        if (err) done(err)
        expect(sensors).to.have.length(1)
        done()
      })
    })
  })

})
