import Introduction from './Components/Introduction';
import MainSectionComponent01 from './Components/MainSectionComponent01';
import Overview from './Components/Overview';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import MainSectionComponent01 from './Components/MainSectionComponent01';
import MainSectionComponent02 from './Components/MainSectionComponent02';
import MapComponent from './Components/MapComponent';
import Overview from './Components/Overview';

function App(props) {
  console.log(props);

  return (
    <>
      {/* 동교 작업용 */}
      <Header />

      {/* 태희 작업용 */}
      {/* <Introduction /> */}
      {/* 태희 작업용 */}
      <Introduction />

      {/* 율 작업용 */}
      {/* <Overview /> */}

      {/* 수아 작업용 */}

      {/* <MainSectionComponent01 /> */}
      {/* <MainSectionComponent02 /> */}
      {/* <MainSectionComponent03 /> */}
      {/* <MainSectionComponent04 /> */}

      {/* 나은 */}
      <MapComponent />
      {/* 동교 작업용 season 2 */}
      <Footer />
    </>
  );
}

export default App;
