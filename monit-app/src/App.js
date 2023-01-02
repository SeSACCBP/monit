<<<<<<< HEAD
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HistoryRoot from "./Components/HistoryRoot";
import History2020 from "./Components/History2020";
import History2021 from "./Components/History2021";
import History2022 from "./Components/History2022";
import History2019 from "./Components/History2019";
=======
import Introduction from "./Components/Introduction";
import Vision from "./Components/Vision";
>>>>>>> 1e38483a0fb6f1ef3534b8b3d0548a1d7f65925a

const router = createBrowserRouter([
  {
    path: "/",
    element: <HistoryRoot />,
    errorElement: <div>page not found</div>,
    children: [
      { index: true, element: <History2022 /> },
      { path: "/:2021", element: <History2021 /> },
      { path: "/:2020", element: <History2020 /> },
      { path: "/:2019", element: <History2019 /> },
    ],
  },
]);
const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <RouterProvider router={router} />
    </div>
=======
    <>
      {/* 태희 작업용 */}
      {/* <Introduction /> */}

      {/* 율 작업용 */}
      <Vision />
    </>
>>>>>>> 1e38483a0fb6f1ef3534b8b3d0548a1d7f65925a
  );
};

export default App;
