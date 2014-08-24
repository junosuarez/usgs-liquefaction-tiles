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
    "maxZoom": "13",
    attribution: 'map <a href="https://github.com/jden/usgs-liquefaction-tiles">jden</a>, data <a href="http://pubs.usgs.gov/of/2000/of00-444/">usgs</a>'
    })
  .addTo(map)

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'legend')

    var colors = {
      'Very high': 'rgb(230,0,0)',
      'High': 'rgb(230,152,0)',
      'Medium': 'rgb(230,230,0)',
      'Low': 'rgb(123,199,97)',
      'Very Low': 'rgb(233,255,190)',
      'Water': 'rgb(190,232,255)'
    }

    div.innerHTML = Object.keys(colors).reduce(function (html, label) {
      return html + '<i style="background:'+colors[label]+'; width: 1em; height: 1em; display: inline-block; border: 1px solid #fff;"> </i> '+label+'<br/>'
    }, '')

    return div;
};

legend.addTo(map);