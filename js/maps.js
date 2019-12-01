function getLayer(url, type, color, opacity, fillColor, weight, mapType) {
  switch (mapType) {
    case 'shape':
      return {
        url: {
          'type': type || 'geojson',
          'url': url,
          options: {
            style: {
              'fillColor': fillColor || '#B32A12',
              'fillOpacity': opacity || '0.8',
              'color': color || '#B32A12',
              'weight': weight || 1,
            }
          }
        }
      }

    case 'marker': { }
    case 'circlemarker': { }
  }
}


// function update_data(layerName, map, url, metric) {
//   // Update Choropleth layers
//   if (url)
//     map.options.layers[layerName].link.url = url
//   if (metric)
//     map.options.layers[layerName].attrs.fillColor.metric = metric
//   console.log(map)
//   map.buildLayer(layerName, map.options.layers[layerName])
// }


function drawMap(id) {
  let layerconfig = {
    id: id,
    layers: {
      worldMap: {
        type: 'tile', url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        options: {
          opacity: 1
        }
      },
    }
  }
  var map = g1.mapviewer(layerconfig)
  return map
}



// function remove_map_layer(map, layerName) {
//   //This function is essentially pointless. Will eventually change to having each page
//   map.removeLayer(layerName)
//   return map
// }







// function create_tooltips(field, value) {
//   var string = ''
//   for (var i = 0, fieldsLength = field.length; i < fieldsLength; i++) {
//     if (value[field[i]] != null)
//       string += ('<p><span class="font-weight-bold">' + field[i] + '</span>' + ': ' + '<span>' + value[field[i]] + '</span></p>')
//   }
//   return '<div class="d-flex flex-column">' + string + '</div>'
// }
