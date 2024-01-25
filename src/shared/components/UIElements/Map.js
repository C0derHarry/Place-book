import React, { useRef, useEffect } from 'react';
import 'ol/ol.css'; // Import OpenLayers styles

import './Map.css';

const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    // Check if the 'ol' library is available
    if (window.ol) {
      // 'ol' is available, proceed with creating the map
      new window.ol.Map({
        target: mapRef.current.id,
        layers: [
          new window.ol.layer.Tile({
            source: new window.ol.source.OSM(),
          }),
        ],
        view: new window.ol.View({
          center: window.ol.proj.fromLonLat([center.lng, center.lat]),
          zoom: zoom,
        }),
      });
    } else {
      // 'ol' is not available, log an error or handle accordingly
      console.error('OpenLayers (ol) library not found.');
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
