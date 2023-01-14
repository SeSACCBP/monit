// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Main from "./Components/Main.jsx";
// import Root from "./Components/Root";
// import Overview from "./Components/Overview";
// import Introduction from "./Components/Introduction";
// import History from "./Components/History";
// import MapComponent from "./Components/MapComponent";
// import Contact from "./Components/Contact";
// import ContactCompany from "./Components/ContactCompany";
// import Error404 from "./Components/Error404";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <Error404 />,
//     children: [
//       { index: true, element: <Main /> },
//       { path: "/overview", element: <Overview /> },
//       { path: "/introduction", element: <Introduction /> },
//       { path: "/history", element: <History /> },
//       { path: "/location", element: <MapComponent /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/partner", element: <ContactCompany /> },
//     ],
//   },
// ]);

// function App(props) {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

//여기 밑부터 삭제하기
import React from "react";
import MainSectionComponent01 from "./Components/MainSectionComponent01";
import MainSectionComponent02 from "./Components/MainSectionComponent02";
import MainSectionComponent03 from "./Components/MainSectionComponent03";
import MainSectionComponent04 from "./Components/MainSectionComponent04";

const App = () => {
  return (
    <div>
      {/* <MainSectionComponent01 /> */}
      {/* <MainSectionComponent02 /> */}
      {/* <MainSectionComponent03 /> */}
      <MainSectionComponent04 />
    </div>
  );
};

export default App;
