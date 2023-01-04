import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../scss/MapComponent.scss";
import "../scss/style.scss";
import logo from "../imgs/Fragment_img/monitLogo_white.png";
import { RiNumber2, RiNumber4, RiMailLine, RiPhoneLine } from "react-icons/ri";

const containerStyle = {
  width: "100%",
  height: "350px",
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
      오시는 길
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <>
          <Marker onLoad={onLoad} position={position} />
        </>
      </GoogleMap>
      {/* 이 밑으로 주소 박스 */}
      <div className="map-Box-One">
        <div className="map-Box-One-right">
          <img src={logo} alt="" />
          <p>주식회사 모닛</p>
        </div>
        <div className="map-Box-One-left">
          <div className="map-Box-One-left-line">
            <p>서울시 서초구 효령로 40, 기탄빌딩 3층</p>
            <p>사당역 14번 출구로부터 도보 11분</p>
          </div>
          <div className="map-Box-One-left-line">
            <p className="map-Box-One-left-line-big">
              <RiPhoneLine className="map-Box-One-Icon" />
              070-4349-0184
            </p>
            <p>
              <RiMailLine className="map-Box-One-Icon" />
              support@goodmonit.com
            </p>
          </div>
        </div>
      </div>
      {/* 이 밑으로 대중교통 박스 */}
      <div className="map-Box-Two">
        <div className="map-Box-Two-Box">
          <div className="map-Box-Two-bus"></div>
          <div className="map-Box-Two-arr">
            <div className="map-Box-Two-arr-B">버스</div>
            <div>350번, 461번, 641번 종로교회앞 하차</div>
            <div>서초06번 방배반딧불센터 하차</div>
          </div>
        </div>
        <div className="map-Box-Two-Box">
          <div className="map-Box-Two-sub"></div>
          <div className="map-Box-Two-arr">
            <div className="map-Box-Two-arr-B">지하철</div>
            <div>
              <RiNumber2 className="map-Box-Two-arr-circle2" />
              <RiNumber4 className="map-Box-Two-arr-circle4" />
              사당역 14번 출구에서 710m
            </div>
            <div>
              <RiNumber2 className="map-Box-Two-arr-circle2" />
              방배역 2번 출구에서 820m
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
