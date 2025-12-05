import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

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
      { path: "/about", element: <About /> },
      { path: "/services", element: <Service /> }, 
      { path: "/projects", element: <Projects /> }, 
      { path: "/contact", element: <Contact /> }, 
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },


    ],
  },
]);

export { router };
