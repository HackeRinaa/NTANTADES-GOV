import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from "./routes/homepage/Homepage";
import Ntanta from "./routes/ntanta/Ntanta";
import Goneas from "./routes/goneas/Goneas";
import Drash from "./routes/drash/Drash";
import NannyInfo from './routes/nannyInfo/NannyInfo';
import Neighbourhood from './routes/neighbourhood/Neighbourhood';
import Selectnanny from './routes/selectnanny/Selectnanny';
import Cvoverlay from './routes/cvoverlay/Cvoverlay';
import Login from './routes/login/Login';
import Appointment from './routes/appointment/Appointment';
import Completedmessage from './routes/completedmessage/Completedmessage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/ntanta',
    element: <Ntanta />,
  },
  {
    path: '/goneas',
    element: <Goneas />,
  },
  {
    path: '/drash',
    element: <Drash/>,
  },
  {
    path: '/ntanta-info',
    element: <NannyInfo/>,
  },
  {
    path: '/neighbourhood',
    element: <Neighbourhood/>,
  },
  {
    path: '/selectnanny',
    element: <Selectnanny/>,
  },
  {
    path: '/cvoverlay',
    element: <Cvoverlay/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/appointment',
    element: <Appointment/>,
  },
  {
    path: '/completedmessage',
    element: <Completedmessage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)