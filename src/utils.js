var moment = require("moment")

var Utils = {
  createTimestamp: function() {
    return moment().unix()
  },
  startOfDay: function(date) {
    return moment(date).startOf("day")
  },
  endOfDay: function(date) {
    return moment(date).endOf("day")
  }
}

module.exports = Utils
