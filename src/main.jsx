import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Root/Root';
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from './Pages/Register';
import CardsDetails from './Pages/CardsDetails';
import FirebaseProvider from './FirbaseProvider/FirebaseProvider';
import PrivateRoute from './Components/PrivateRoute';
import Updated from './Pages/Updated';
import Completed from './Pages/Completed';
import { HelmetProvider } from 'react-helmet-async';
import UserProfile from './Pages/UserProfile';
import Error from './Pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cardsdata/:id",
        // loader: ({params}) => fetch(`./data.json/${params.id}`),
        loader: () => fetch('/data.json'),
        element: <PrivateRoute>
          <CardsDetails></CardsDetails>
        </PrivateRoute>,
      },
      {
        path: "/updated",
        element: <PrivateRoute>
          <Updated></Updated>
        </PrivateRoute>,
      },
      {
        path: "/user",
        element: <PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>,
      },
      {
        path: "/completed",
        element: <PrivateRoute>
          <Completed></Completed>
        </PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
