import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import Main from "@/layout/Main";

// Pages
import Home from "@/pages/Home";
import CameraCapture from "@/pages/CameraCapture";
import GetData from "@/pages/GetData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "main",
    element: <Main />,
    children: [
      {
        path: "camera",
        element: <CameraCapture />,
      },
      {
        path: "get-data",
        element: <GetData />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
