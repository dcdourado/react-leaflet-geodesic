import React, { useState } from 'react'
import { Map, TileLayer, LayersControl } from 'react-leaflet'
const { BaseLayer } = LayersControl
import { Geodesic } from '../dist/react-leaflet-geodesic'

const GeodesicExample = () => {
  const [waypoints, setWaypoints] = useState([])

  const options = {
    weight: 20,
    opacity: 0.5,
    color: 'red',
  }

  const handleMapClick = e => {
    let newWpts = [...waypoints, [e.latlng.lat, e.latlng.lng]]
    setWaypoints(newWpts)
  }

  const handleClearButtonClick = () => {
    setWaypoints([])
  }

  return (
    <div>
      <Map
        center={[-15, -44]}
        zoom={4}
        zoomControl={true}
        onClick={handleMapClick}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          <Geodesic positions={waypoints} options={options} />
        </LayersControl>
      </Map>
      <button onClick={handleClearButtonClick}>Clear waypoints</button>
    </div>
  )
}

export default GeodesicExample

// import React from 'react'
// import { Map, TileLayer, LayersControl } from 'react-leaflet'
// // import { GoogleLayer } from '../dist'
// import { Geodesic } from '../dist/react-leaflet-geodesic'
// const { BaseLayer } = LayersControl

// export default class GeodesicExample extends React.Component {
//   constructor() {
//     super()
//   }

//   render() {
//     const wpts = [
//       [-33, -70],
//       [-33, 151],

//     ]
//     console.log(Geodesic)

//     return (
//       <Map center={[-15, -44]} zoom={4} zoomControl={true}>
//         <LayersControl position="topright">
//           <BaseLayer checked name="OpenStreetMap.Mapnik">
//             <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
//           </BaseLayer>
//           <Geodesic positions={wpts} />
//         </LayersControl>
//       </Map>
//     )
//   }
// }
