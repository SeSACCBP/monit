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
      <Main />
      {/* <RouterProvider routefffr={router} /> */}
=======
      <RouterProvider router={router} />
>>>>>>> f2a3f78a71614cf72a3c82399114b1f929221171
    </>
  );
}
export default App;
