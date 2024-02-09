import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import About from "./Components/Layout/About/About";
import Portfolio from "./Components/Layout/Portfolio/Portfolio";
import Contact from "./Components/Layout/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Layout/NotFound/NotFound";
import Home from "./Components/Layout/Home/Home";

function App() {
  const routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Navigate to={"/home"} />,
        },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
