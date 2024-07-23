import React from "react";
import Dashboard from './Components/Dashboard'
import CelebrityEvent from "./Components/CelebrityEvent";
import AllEvents from "./Components/allEvents";
import EventOrganizer from "./Components/EventOrganizer";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/all-events',
      element: <AllEvents />
    },
    {
      path: '/celebrity-event',
      element: <CelebrityEvent />
    },
    {
      path: '/event-organiser',
      element: <EventOrganizer />
    },
    {
      path: '*',
      element: <h1>No Such path found!</h1>
    }
  ])
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>

}

export default App;
