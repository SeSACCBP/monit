import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main.jsx";
import Root from "./Components/Root";
import Overview from "./Components/Overview";
import Introduction from "./Components/Introduction";
import History from "./Components/History";
import MapComponent from "./Components/MapComponent";
import Product from "./Components/Product.jsx";
import Partner from "./Components/Partner";
import Error404 from "./Components/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      { index: true, element: <Main /> },
      { path: "/overview", element: <Overview /> },
      { path: "/introduction", element: <Introduction /> },
      { path: "/history", element: <History /> },
      { path: "/location", element: <MapComponent /> },
      { path: "/product", element: <Product /> },
      { path: "/partner", element: <Partner /> },
    ],
  },
]);

function App(props) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
