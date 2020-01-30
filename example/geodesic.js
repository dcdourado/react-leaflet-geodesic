import React, { useState } from 'react'
import { Map, TileLayer, LayersControl } from 'react-leaflet'
const { BaseLayer } = LayersControl
import { GeodesicLine } from '../dist/react-leaflet-geodesic'

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
          <GeodesicLine positions={waypoints} options={options} />
        </LayersControl>
      </Map>
      <button onClick={handleClearButtonClick}>Clear waypoints</button>
    </div>
  )
}

export default GeodesicExample
