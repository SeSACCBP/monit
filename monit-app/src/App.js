import Header from './Components/Header';
import Footer from './Components/Footer';

import Introduction from './Components/Introduction';
import Overview from './Components/Overview';
import MapComponent from './Components/MapComponent';
import History from './Components/History';
import Contact from './Components/Contact';
import Main from './Components/Main.jsx';

function App(props) {
  console.log(props);
  return (
    <>
      {/* 동교 작업용 */}
      <Header />

      {/* 태희 작업용 */}
      {/* <Introduction /> */}

      {/* 율 작업용 */}
      {/* <Overview /> */}

      {/* 수아 작업용 */}
      {/* <MainSectionComponent01 /> */}
      {/* <MainSectionComponent02 /> */}
      {/* <MainSectionComponent03 /> */}
      {/* <MainSectionComponent04 /> */}
      <Main />

      {/* 나은 */}
      {/* <MapComponent /> */}

      {/*은기 */}

      {/* 동교 작업용 season 2 */}
      <Footer />
    </>
  );
}
export default App;
