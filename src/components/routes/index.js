import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import SingleProduct from "../pages/singleproduct";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/product/:id",
        element: <SingleProduct />,
    }
];

