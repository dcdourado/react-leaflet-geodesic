import { withLeaflet, Path } from 'react-leaflet'
import { GeodesicLine as LeafletGeodesicLine } from 'leaflet.geodesic'

class GeodesicLine extends Path {
  createLeafletElement(props) {
    const { positions, options } = props
    return new LeafletGeodesicLine(positions, options)
  }

  updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions)
    }
    this.setStyleIfChanged(fromProps, toProps)
  }
}

export default withLeaflet(GeodesicLine)
