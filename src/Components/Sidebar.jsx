import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    const getActiveClass = (path) => {
        return location.pathname === path ? 'active-font' : '';
    }

    return (
        <div className="flex flex-col h-screen w-[230px] bg-sideBarColor p-0 pb-10 min-h-screen fixed ">
            <div className="logo top-4 mb-20 mt-4 text-center text-3xl text-white">
                <img src="/src/assets/eventinoLogo.png" alt="Eventino Logo" className="h-auto w-[130px] block mx-auto mt-2" />
            </div>
            <div className="flex flex-col p-0 items-center justify-between h-full ">
                <div className="upper-portion flex flex-col p-0 ">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-3" src="/src/assets/Icons/dashboard.png" alt="Dashboard Icon" />
                        <h5 className={getActiveClass('/')}>Dashboard</h5>
                    </NavLink>
                    <NavLink to="/all-events" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-3" src="/src/assets/Icons/all-events.png" alt="All Events Icon" />
                        <h5 className={getActiveClass('/all-events')}>All Events</h5>
                    </NavLink>

                    <NavLink to="/celebrity-event" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-3" src="/src/assets/Icons/celebrity-events.png" alt="Celebrity Events Icon" />
                        <h5 className={getActiveClass('/celebrity-event')}>Celebrity Events</h5>
                    </NavLink>

                    <NavLink to="/event-organiser" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-3" src="/src/assets/Icons/events-organiser.png" alt="Event Organiser Icon" />
                        <h5 className={getActiveClass('/event-organiser')}>Event Organiser</h5>
                    </NavLink>
                </div>
                <div className="lower-portion flex flex-col p-0 ">
                    <hr className="w-[94%] border" />
                    <NavLink to="/settings" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-3" src="/src/assets/Icons/settings.png" alt="Settings Icon" />
                        <h5 className={getActiveClass('/settings')}>Settings</h5>
                    </NavLink>
                    <NavLink to="/logout" className=" text-white py-3 text-md my-3 bg-white w-[200px] rounded-md flex h-12 ml-5">
                        <img className="w-6 h-auto mr-2 ml-2" src="/src/assets/Icons/logout.png" alt="Logout Icon" />
                        <h5 className="logout-txt">Logout</h5>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
