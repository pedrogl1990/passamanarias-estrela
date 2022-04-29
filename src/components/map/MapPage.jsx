import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import myApi from "./apigoogle.json";

const containerStyle = {
  width: "1440px",
  height: "400px",
};

const center = {
  lat: 41.06094210772987,
  lng: -8.597263980380074,
};

function MapPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: myApi.api,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapPage);
