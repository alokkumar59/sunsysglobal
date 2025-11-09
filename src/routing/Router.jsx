import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home from "../pages/Home";

const Layout = () => (
  <>
  
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
     
    ],
  },
]);

export { router };
