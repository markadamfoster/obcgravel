import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Polygon, GeoJSON } from "react-leaflet";

import { countyOutline } from "../Data/countyOutline";
import { rides } from "../Data/rides";
import { mapboxAccessToken } from "../constants";

export default function Map({ selectedRide }) {
  const countyOutlineOptions = { color: "#87D0E4", fillOpacity: 0 };
  const ridePathOptions = { color: "#61ba9eb3", weight: 6 };
  const ridePathSelectedOptions = { color: "pink", weight: 6 };
  const defaultMapCenter = [43.0833231, -95.6250097];

  return (
    <div>
      <MapContainerStyled center={defaultMapCenter} zoom={11}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`}
          attribution='© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          tileSize={512}
          zoomOffset={-1}
          maxZoom={18}
        />

        <CountyOutline
          pathOptions={countyOutlineOptions}
          positions={countyOutline}
        />
        {rides.map((ride, i) => (
          <GeoJSON
            attribution="&copy; credits due..."
            data={ride}
            pathOptions={
              ride.id === selectedRide
                ? ridePathSelectedOptions
                : ridePathOptions
            }
          />
        ))}
      </MapContainerStyled>
    </div>
  );
}

const MapContainerStyled = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
`;

const CountyOutline = styled(Polygon)``;
