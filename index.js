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
var infoTitle = L.control({position: 'bottomleft'});

infoTitle.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info-title');

  var html = '<div style="width: 500px; background: #fff; padding-left: 20px; padding-top: 5px; padding-right: 20px; padding-bottom: 10px;"><h1>Bay Area Liquefaction Susceptibility</h1><p style="font-size: 1.2em;">This map shows liquefation susceptibility data for the San Francisco Bay Area as determined by <a href="http://pubs.usgs.gov/of/2000/of00-444/">USGS Open-File Report 00-444, 2000</a>. "Liquefaction is the transformation of a saturated granular material from a solid to a liquefied state as a result of increased pore pressure and decreased effective stress (as cited in USGS2000)." This is not a map of likelihood of ground shaking or ground failures, however liquefaction has been observed to results in ground failures such as "sand boils, lateral spreads, ground settlement, ground cracking and ground warping (as cited in USGS 2000)."</p>';

  div.innerHTML = html;

  return div;
}

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
infoTitle.addTo(map);
