
import React from "react";
import L, { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Polygon, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconImg from "leaflet/dist/images/marker-icon.png"

import "./Map.css";

const Map = () => {
  
  const defaultPosition: LatLngExpression = [46.96601, 7.41143]; // Bremgartenwald
  var url = 'https://wmts20.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg';

  const polygon: LatLngExpression[] = [
    [46.97100503555501,7.4181321127277515],
    [46.96979094171849,7.419512371488337],
    [46.96785700895023,7.419644496984791],
    [46.965922852670616,7.41852833652381],
    [46.964213421419515,7.416689500278139],
    [46.96259434637023,7.416952969612274],
    [46.96209967737944,7.417281648594689],
    [46.96200938047555,7.41557364277021],
    [46.962323780689886,7.4136026713385546],
    [46.96187355894224,7.411632074973777],
    [46.96542487137728,7.405126107969477],
    [46.96560451418053,7.404271913719851],
    [46.96654749426737,7.399672325949166],
    [46.968661669948794,7.400590583472943],
    [46.9682142539397,7.408212291033252],
    [46.96951967075658,7.412613640319248],
    [46.970329694939714,7.414650062218596],
    [46.97100503555501,7.4181321127277515]
  ];

  const polyline: LatLngExpression[] = [
    [46.96203225193723,7.417478758616334],
    [46.96322362173851,7.4150803836623025],
    [46.96576499176308,7.416228948458388],
    [46.96877846486095,7.416720404084648],
    [46.96347081701836,7.414291921650181],
    [46.96398798718615,7.414061740569083],
    [46.96909314153159,7.415964689608403],
    [46.968395817537875,7.41501232049818],
    [46.96801340996167,7.414486884977604]
  ];

  var markerIcon = L.icon({
    iconUrl: markerIconImg,
    iconRetinaUrl: markerIconImg,
    iconAnchor: [16, 32],
    popupAnchor: [0,-32],
    iconSize: [32, 32],
});
  
  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={14}
        style={{ height: "100vh"/*, filter: "contrast(50%)"*/}}
        zoomControl={false}
        crs={L.CRS.EPSG3857}
        continuousWorld={true}
        worldCopyJump={false}
      >
        <TileLayer
          url={url}
        />
        <Polygon color="purple" positions={polygon}/>
        <Polyline color="lime" positions={polyline} />
        <Marker position={polygon[6]} icon={markerIcon}>
          <Popup>
              Treffpunkt 
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
