import Introduction from "./Components/Introduction";
import Overview from "./Components/Overview";
import MapComponent from "./Components/MapComponent";
import History from "./Components/History";
import Contact from "./Components/Contact";
import Main from "./Components/Main.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
<<<<<<< HEAD
import Error404 from "./Components/Error404";
import Header from "./Components/Header";
=======
import ContactCompany from "./Components/ContactCompany";
>>>>>>> da7be683ee8c32088aa3c108ef1f2f1b7a004b47

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
      { path: "/partner", element: <ContactCompany /> },
    ],
  },
]);

function App(props) {
  console.log(props);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
