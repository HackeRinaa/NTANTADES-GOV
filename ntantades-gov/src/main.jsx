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
import NtantaGov from './routes/ntantaGov/NtantaGov';
import CvTemplate from './routes/cvTemplate/CvTemplate';
import GoneasGov from './routes/goneasGov/GoneasGov';
import GoneasProfile from './routes/goneasProfile/GoneasProfile';
import Appointment from './routes/appointment/Appointment';
import SelectNanny from './routes/selectNanny/SelectNanny';
import ParentProfile from './routes/parentProfile/ParentProfile';
import NtantaProfile from './routes/ntantaProfile/NtantaProfile';
import Ratings from './routes/ratings/Ratings';
import Requests from './routes/requests/Requests';
import Contracts from './routes/contracts/Contracts';
import ChatPage from './routes/chat/Chat';

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
  {
    path: '/ntanta-gov',
    element: <NtantaGov/>,
  },
  {
    path: '/goneas-gov',
    element: <GoneasGov/>,
  },
  {
    path: '/goneas-profile',
    element: <GoneasProfile/>,
  },
  {
    path: '/cv-template',
    element: <CvTemplate/>,
  },
  {
    path: '/appointment',
    element: <Appointment/>,
  },
  {
    path: '/select-nanny',
    element: <SelectNanny/>,
  },
  {
    path: '/profile-parent',
    element: <ParentProfile/>,
  },
  {
    path: '/profile-ntanta',
    element: <NtantaProfile/>,
  },
  {
    path: '/requests',
    element: <Requests/>,
  },
  {
    path: '/ratings',
    element: <Ratings/>,
  },
  {
    path: '/contracts',
    element: <Contracts/>,
  },
  {
    path: '/chat',
    element: <ChatPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)