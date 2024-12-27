import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from "./routes/homepage/Homepage";
import Ntanta from "./routes/ntanta/Ntanta";
import Goneas from "./routes/goneas/Goneas";
import Drash from "./routes/drash/Drash";

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)