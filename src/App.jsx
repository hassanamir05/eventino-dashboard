import React from "react";
import Dashboard from './Components/Dashboard';
import CelebrityEvent from "./Components/CelebrityEvent";
import AllEvents from "./Components/allEvents";
import EventOrganizer from "./Components/EventOrganizer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/Applayout";
import WelcomeMsg from "./Components/WelcomeMsg";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />
        },
        {
          path: 'all-events',
          element: <AllEvents />
        },
        {
          path: 'celebrity-event',
          element: <CelebrityEvent />
        },
        {
          path: 'event-organiser',
          element: <EventOrganizer />
        },
        {
          path: '*',
          element: <div className="mt-10 ml-8">
            <WelcomeMsg username="Hassan" message="No such path exist!" />
          </div>
        }
      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
