import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components/macro";
import L from "leaflet";
function Map({ data }) {
  const position = [data.lat, data.lng];
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  const locationIcon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [35, 45],
  });

  return (
    <Container>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <ChangeView center={position} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={locationIcon}>
          <Popup>{data.city}</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
}

export default Map;

const Container = styled.div`
  margin: 0;
  width: 100vw;
  height: 60vh;

  .leaflet-container {
    height: 100%;
    z-index: 1;
  }
`;
