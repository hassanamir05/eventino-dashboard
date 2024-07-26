import React from 'react';

const Appbar = (props) => {
    return (
        <div className="bg-sideBarColor h-[70px] pt-5 flex justify-between items-center pr-6 py-10 px-10  sticky " style={{ fontFamily: 'Poppins, arial' }}>

            <div className="logo top-4 text-center text-3xl text-white">
                <img src="/src/assets/eventinoLogo.png" alt="Eventino Logo" className="h-auto w-[130px] block mx-auto mt-2" />
            </div>

            <select
                name="admin-email"
                id="admin-email"
                className="bg-transparent text-white text-md hover:cursor-pointer focus:outline-none focus:border-0 mt-5">
                <option value="email">{props.email}</option>
            </select>
        </div>
    );
}

export default Appbar;
