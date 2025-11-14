import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home from "../pages/Home";
import About from "../pages/About"; // ← YOU FORGOT THIS

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
      { path: "/about", element: <About /> }, // ← ADD THIS ROUTE
    ],
  },
]);

export { router };
