import React from "react";
import Dashboard from "./Sections/Dashboard";
import CelebrityEvent from "./Sections/CelebrityEvent";
import AllEvents from "./Sections/allEvents";
import EventOrganizer from "./Sections/EventOrganizer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/Applayout";
import Setting from "./Sections/Setting";
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
          path: 'settings',
          element: <Setting />
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
