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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('./data.json')

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
        loader: () => fetch('../public/data.json'),
        element: <PrivateRoute>
          <CardsDetails></CardsDetails>
        </PrivateRoute>,

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
