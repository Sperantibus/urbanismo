
var map = L.map('map').setView([-25.4294, -49.2719], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

fetch('dados/lotes.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(
          `<strong>Lote</strong><br>Uso: ${feature.properties.uso || "Não definido"}`
        );
      },
      style: {
        color: "#00ffcc",
        weight: 1,
        fillOpacity: 0.3
      }
    }).addTo(map);
  });
