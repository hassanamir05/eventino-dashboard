import React from "react";

const Filter = ({ options }) => {
    return (
        <select className="border border-gray-300 text-black rounded p-2 px-5 hover:cursor-pointer bg-white">
            {options.map((option, index) => (
                <option key={index} className="text-gray-500 bg-white" value={option.toLowerCase().replace(" ", "-")}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Filter;
