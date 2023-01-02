import Introduction from "./Components/Introduction";
import MainSectionComponent01 from "./Components/MainSectionComponent01";
import MainSectionComponent02 from "./Components/MainSectionComponent02";
import MapComponent from "./Components/MapComponent";
import Overview from "./Components/Overview";

function App(props) {
  console.log(props);

  return (
    <>
      {/* <Introduction /> */}
      {/* 태희 작업용 */}
      <Introduction />

      {/* 율 작업용 */}
      {/* <Overview /> */}

      {/* 수아 작업용 */}
      {/* <MainSectionComponent02 /> */}

      <MainSectionComponent02 />
      {/* <MainSectionComponent03 /> */}
      {/* <MainSectionComponent04 /> */}

      {/* 나은 */}
      <MapComponent />
    </>
  );
}

export default App;
