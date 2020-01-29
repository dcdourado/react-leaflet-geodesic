import React from 'react';
import { render } from 'react-dom';
import GeodesicExample from "./geodesic";



const example = (
  <div>
    <h1>React-Leaflet-Geodesic example</h1>
    <GeodesicExample />
  </div>
)

render(example, document.getElementById('app'));