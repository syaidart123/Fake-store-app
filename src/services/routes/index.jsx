import ErrorPage from "../../Pages/404";
import DetailProduct from "../../Pages/DetailProduct";
import HomePage from "../../Pages/HomePage.jsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProduct />,
  },
]);
