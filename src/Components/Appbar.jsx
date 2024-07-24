import React from 'react';

const Appbar = () => {
    return (
        <div className="bg-sideBarColor h-[70px] pt-5 flex justify-end items-center pr-6 py-10 " style={{ fontFamily: 'Poppins, cursive' }}>


            <select
                name="admin-email"
                id="admin-email"
                className="bg-transparent text-white text-md hover:cursor-pointer focus:outline-none focus:border-0 mt-5">
                <option value="admin-email">Admin@gmail.com</option>
            </select>
        </div>
    );
}

export default Appbar;
