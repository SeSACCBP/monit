// <<<<<<< HEAD
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HistoryRoot from "./Components/HistoryRoot";
import History2020 from "./Components/History2020";
import History2021 from "./Components/History2021";
import History2022 from "./Components/History2022";
import History2019 from "./Components/History2019";
// =======
// import Introduction from "./Components/Introduction";
// <<<<<<< HEAD
// import Vision from "./Components/Vision";
// >>>>>>> 1e38483a0fb6f1ef3534b8b3d0548a1d7f65925a
// =======
// import MainSectionComponent01 from "./Components/MainSectionComponent01";
// import MainSectionComponent02 from "./Components/MainSectionComponent02";
// import Overview from "./Components/Overview";
// >>>>>>> 42f2380209d5672dbc001a9464efc9a662f6ee5a

const router = createBrowserRouter([
  {
    path: "/",
    element: <HistoryRoot />,
    errorElement: <div>page not found</div>,
    children: [
      { index: true, element: <History2022 /> },
      { path: "/:years", element: <History2021 /> },
    ],
  },
]);
const App = () => {
  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
    
      {/* 태희 작업용 */}
      {/* <Introduction /> */}

      {/* 율 작업용 */}
      {/* <Overview /> */}

      {/* 수아 작업용 */}
      {/* <MainSectionComponent02 /> */}
    </>
  );
};

export default App;
