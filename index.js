var L = require('leaflet')
var leafletMap = require('leaflet-map')

var map = leafletMap()

map.setView([37.8255,-122.3698], 10)
window.map = map
L.tileLayer('./{z}/{x}/{y}.png',{
    "bounds": [
      [36.8642,-123.6346],
      [38.859,-121.2067]
    ], 
    "minZoom": "8",
    "maxZoom": "13"
    })
  .addTo(map)