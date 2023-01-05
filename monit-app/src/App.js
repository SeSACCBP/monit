import Introduction from "./Components/Introduction";
import Overview from "./Components/Overview";
import MapComponent from "./Components/MapComponent";
import History from "./Components/History";
import Contact from "./Components/Contact";
import Main from "./Components/Main.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Overview />,
    children: [
      { index: true, element: <Main /> },
      { path: "/overview", element: <Overview /> },
      { path: "/introduction", element: <Introduction /> },
      { path: "/history", element: <History /> },
      { path: "/location", element: <MapComponent /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App(props) {
  console.log(props);
  return (
    <>
<<<<<<< HEAD
      {/* 동교 작업용 */}
      {/* <Header /> */}

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
      {/* <MapComponent /> */}

      {/*은기 */}

      {/* 동교 작업용 season 2 */}
      {/* <Footer /> */}
=======
      <RouterProvider router={router} />
>>>>>>> 1f54532eedbaeea8b6fb620a3dcd7f0ac7a7209a
    </>
  );
}
export default App;
