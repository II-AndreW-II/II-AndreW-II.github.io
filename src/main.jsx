import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from '../src/pages/Home.jsx'
import {Licence} from "./pages/Licence.jsx";
import {AboutUs} from "./pages/About-us.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Converter} from "./pages/Converter.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/converter',
        element: <Converter/>
    },
    {
        path: '/about-us',
        element: <AboutUs/>
    },
    {
        path: '/licence',
        element: <Licence/>
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
