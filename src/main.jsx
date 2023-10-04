import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Error from './Components/Error.jsx'
import Home from './Layouts/Home.jsx';
import Donation from './Layouts/Donation.jsx';
import Statistics from './Layouts/Statistics.jsx';
import Details from './Layouts/Details.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/donation/:id",
        element: <Details></Details>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
