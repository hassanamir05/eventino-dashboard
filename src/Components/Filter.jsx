import React from "react";

const Filter = ({ options }) => {
    return (
        <select className="border border-gray-300 text-gray rounded py-1 px-2 hover:cursor-pointer bg-white">
            {options.map((option, index) => (
                <option key={index} className="text-gray-500 bg-white" value={option.toLowerCase().replace(" ", "-")}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Filter;
