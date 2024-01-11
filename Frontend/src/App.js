import {
    IoStar,
    IoStarOutline,
    IoPersonCircle,
    IoSearch,
    IoClose,
    IoChatbubblesOutline,
    IoFilter,
    IoChevronDown,
    IoHelpCircleOutline,
} from "react-icons/io5";
import "./App.css";

import {
    BrowserRouter as Router,
    createBrowserRouter,
    Route,
    RouterProvider,
    Switch,
    Navigate,
    useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useState } from "react";

import Catalog from "./Pages/Catalog";
import CreateListing from "./Pages/CreateListing";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import Redirect from "./Pages/Redirect";
import Auth from "./Pages/Auth";
import Signup from "./Pages/Signup";
import useToken from "./Services/useToken";

function App() {
    //const [isAuth, setIsAuth] = useState(true);
    const { token, setToken } = useToken();
    const unAuthRouter = createBrowserRouter([
        {
            path: "*",
            element: <Navigate to="/auth/login" replace />,
        },
        {
            path: "/auth",
            element: <Auth />,
            children: [
                {
                    path: "login",
                    element: <Login setToken={setToken} />,
                },
                {
                    path: "signup",
                    element: <Signup setToken={setToken} />,
                },
                {
                    path: "",
                    element: <Navigate to="/auth/login" replace />,
                },
                {
                    path: "*",
                    element: <Navigate to="/auth/login" replace />,
                },
            ],
        },
    ]);

    const authRouter = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/home" replace />,
            path: "/auth/*",
            element: <Navigate to="/home" replace />,
        },
        {
          path: "product/:id",
          element: <Product />,
            path: "/home",
            element: <Home />,
            children: [
                {
                    path: "order",
                    element: <Order />,
                },
                {
                    path: "product",
                    element: <Product />,
                },
                {
                    path: "create",
                    element: <CreateListing />,
                },
                {
                    path: "catalog",
                    element: <Catalog />,
                },
                {
                    path: "",
                    element: <Navigate to="/home/catalog" replace />,
                },
                {
                    path: "*",
                    element: <Navigate to="/home/catalog" replace />,
                },
            ],
        },
        
    ]);
    return <RouterProvider router={token ? authRouter : unAuthRouter} />;
}

export default App;
