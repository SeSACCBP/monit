import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../scss/MapComponent.scss";
import "../scss/style.scss";
import logo from "../imgs/Fragment_img/monitLogo_white.png";

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
    <div className="MapComponent">
      오시는 길 초안
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <>
          <Marker onLoad={onLoad} position={position} />
        </>
      </GoogleMap>
      <div className="map-Box-One">
        <div className="map-Box-One-right">
          <img src={logo} alt="" />
          <p>주식회사 모닛</p>
        </div>
        <div className="map-Box-One-left">
          <div className="map-Box-One-left-line">
            <p>서울시 서초구 방배로 40, 기탄빌딩 3층</p>
            <p>사당역 14번 출구로부터 도보 11분</p>
          </div>
          <div className="map-Box-One-left-line">
            <p>070-4349-0184</p>
            <p>support@goodmonit.com</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
