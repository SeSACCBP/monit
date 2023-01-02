import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.478345,
  lng: 126.989272,
};

const position = {
  lat: 37.47828,
  lng: 126.98925,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function MyComponent() {
  const API_KEY = process.env.REACT_APP_Map_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return isLoaded ? (
    <div>
      오시는 길 초안
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <>
          <Marker onLoad={onLoad} position={position} />
        </>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
