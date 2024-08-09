import React from 'react';

const MultilinedInput = ({ heading, value, onChange, rows = 5, name }) => {
    return (
        <div className="my-2">
            <p className="text-md ml-1 mb-1 font-[600]">{heading}</p>
            <textarea
                className="w-[380px] border-2 border-gray-300 p-2 text-sm rounded-lg bg-transparent text-black"
                rows={rows}
                placeholder={heading}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default MultilinedInput;
