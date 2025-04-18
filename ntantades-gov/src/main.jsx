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
import Voucher from './routes/voucher/Voucher';
import CalendarPage from './routes/calendar/CalendarPage';
import Contact from './routes/contact/Contact';
import Neighborhood from './routes/neighborhood/Neighborhood';
import Success from './routes/success/Success';
import Login from './routes/login/Login';
import ParentSignup from './routes/parentSignUp/ParentSignUp';
import NannySignup from './routes/nannySignUp/NannySignUp';




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
    path: '/signup-parent',
    element: <ParentSignup />,
  },
  {
    path: '/signup-nanny',
    element: <NannySignup />,
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
    // loader: profileLoader,
  },
  {
    path: '/profile-ntanta',
    element: <NtantaProfile/>,
    //loader: profileLoader,
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
  {
    path: '/voucher',
    element: <Voucher/>,
  },
  {
    path: '/calendar',
    element: <CalendarPage/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/select-neighborhood',
    element: <Neighborhood/>
  },
  {
    path: '/success',
    element: <Success/>
  },
  {
    path: '/login',
    element: <Login/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)