import { createBrowserRouter } from "react-router-dom";
import Collection from "./containers/Collection";
import ErrorPage from "./containers/ErrorPage";
import HomePage from "./containers/HomePage";
import ProductPage from "./containers/ProductPage";
import Root from "./containers/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "collection/:collection",
        element: <Collection />
      },
      {
        path: "product/:productId",
        element: <ProductPage />
      },
    ],
  },
]);

export default router;
