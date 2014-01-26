var mongoose = require("mongoose")
var Utils = require("../utils")

var sensorSchema = new mongoose.Schema({
  timestamp: Number,
  temperature: Number,
  humidity: Number
})
sensorSchema.statics.findByDay = function (day, callback) {
  var start = Utils.startOfDay(day).unix()
  var end = Utils.endOfDay(day).unix()
  this.find().where("timestamp").gt(start).lt(end).exec(callback)
}
sensorSchema.pre("save", function(next) {
  if (!this.timestamp) {
    this.timestamp = Utils.createTimestamp()
  }
  next()
})

var Sensor = mongoose.model("sensor", sensorSchema);
module.exports = Sensor
