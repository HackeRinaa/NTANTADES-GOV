import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Homepage from "./routes/homepage/Homepage";
import Ntanta from "./routes/ntanta/Ntanta";
import Goneas from "./routes/goneas/Goneas";
import Drash from "./routes/drash/Drash";
import NannyInfo from './routes/nannyInfo/NannyInfo';
import NtantaFaq from './routes/ntantaFaq/NtantaFaq';
import GoneasFaq from './routes/goneasFaq/GoneasFaq';

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
    path: '/ntanta-faq',
    element: <NtantaFaq/>,
  },
  {
    path: '/goneas-faq',
    element: <GoneasFaq/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)