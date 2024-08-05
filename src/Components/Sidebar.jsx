import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    const getIconPath = (baseName, fullPath) => {
        return location.pathname === fullPath ? `/src/assets/Icons/${baseName}-active.png` : `/src/assets/Icons/${baseName}.png`;
    };

    return (
        <div className="flex flex-col h-[full] w-[230px] bg-sideBarColor py-10 pb-40">

            <div className="flex flex-col p-0 items-center justify-between h-full ">
                <div className="upper-portion flex flex-col p-0 ">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-4" src={getIconPath('dashboard', '/')} alt="Dashboard Icon" />
                        <h5 className={location.pathname === '/' ? 'active-font' : ''}>Dashboard</h5>
                    </NavLink>
                    <NavLink to="/all-events" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-4" src={getIconPath('all-events', '/all-events')} alt="All Events Icon" />
                        <h5 className={location.pathname === '/all-events' ? 'active-font' : ''}>All Events</h5>
                    </NavLink>
                    <NavLink to="/celebrity-event" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-7 h-auto mr-2 ml-4" src={getIconPath('celebrity-events', '/celebrity-event')} alt="Celebrity Events Icon" />
                        <h5 className={location.pathname === '/celebrity-event' ? 'active-font' : ''}>Celebrity Events</h5>
                    </NavLink>
                    <NavLink to="/event-organiser" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-4" src={getIconPath('event-organiser', '/event-organiser')} alt="Event Organiser Icon" />
                        <h5 className={location.pathname === '/event-organiser' ? 'active-font' : ''}>Event Organiser</h5>
                    </NavLink>
                    <NavLink to="/personal-event" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-4" src={getIconPath('personal-event', '/personal-event')} alt="Personal Event Icon" />
                        <h5 className={location.pathname === '/personal-event' ? 'active-font' : ''}>Personal Event</h5>
                    </NavLink>
                    <NavLink to="/report-event" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-4" src={getIconPath('report-event', '/report-event')} alt="Personal Event Icon" />
                        <h5 className={location.pathname === '/report-event' ? 'active-font' : ''}>Report Event</h5>
                    </NavLink>
                </div>
                <div className="lower-portion flex flex-col p-0 ">
                    <hr className="w-[94%] border" />
                    <NavLink to="/settings" className={({ isActive }) => isActive ? 'active text-white text-md my-3 py-2 mx-4 flex relative' : 'not-active text-white py-2 text-md my-3 mx-4 flex'}>
                        <img className="w-6 h-auto mr-2 ml-4" src={getIconPath('settings', '/settings')} alt="Settings Icon" />
                        <h5 className={location.pathname === '/settings' ? 'active-font' : ''}>Settings</h5>
                    </NavLink>
                    <NavLink to="/logout" className=" text-white py-3 text-md my-3 bg-white w-[200px] rounded-md flex h-12 ml-6">
                        <img className="w-6 h-auto mr-2 ml-2" src="/src/assets/Icons/logout.png" alt="Logout Icon" />
                        <h5 className="logout-txt">Logout</h5>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
