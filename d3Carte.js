var data = { "Algeria": 20, "France": 3, "Brazil": 5, "Albania": 2 };
var map = L.map('mapid').setView([0, 0], 1);

var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';
var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(map);
var select = L.countrySelect({ exclude: "French Southern and Antarctic Lands" });

select.addTo(map);
select.on('change', function (e) {
    if (e.feature === undefined) { //Do nothing on title
        return;
    }
    var country = L.geoJson(e.feature);
    if (this.previousCountry != null) {
        map.removeLayer(this.previousCountry);
    }
    this.previousCountry = country;
    map.addLayer(country);
    map.fitBounds(country.getBounds());

});
var colorScale = d3.scaleSequential()
    .domain([0, 100])
    .interpolator(d3['interpolatePlasma']);

var c = colorScale(20);
c = colorScale(0);
c = colorScale(100);

function setColor(name) {
    if (data[name] > 0)
        return colorScale(data[name]);
    return 'grey';
}
function style(feature) {
    return {

        fillColor: setColor(feature.properties.name),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(statesData, { style: style }).addTo(map);