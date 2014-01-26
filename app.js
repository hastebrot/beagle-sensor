var express = require("express")
var http = require("http")
var socket = require("socket.io")
var mongoose = require("mongoose")

var Sensor = require("./src/models/sensor")

var app = express()
var server = http.createServer(app)
var io = socket.listen(server)
mongoose.connect("mongodb://localhost/beagle")

app.use(express.static(__dirname + "/public"))

io.sockets.on("connection", function(socket) {
  socket.on("sensorsGet", function(data) {
    Sensor.find(function(err, sensors) {
      socket.emit("sensors", sensors)
    })
  })
})

server.listen(80)
