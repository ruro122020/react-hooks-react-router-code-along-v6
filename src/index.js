import React from "react";
import ReactDOM from "react-dom/client";
//step 1. Import react-router functions
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About'
import Login from './pages/Login'
import UserProfile from "./pages/UserProfile";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/profile/:id',
        element: <UserProfile />
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);