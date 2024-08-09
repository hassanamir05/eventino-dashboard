import { useEffect } from "react";

const SelectInput = ({ options, heading, value, onChange }) => {

    useEffect(() => {
        console.log(options);
        console.log('value : ', value);
    }, [options, value]);

    return (
        <div className="my-2">
            <p className="text-md ml-1 mb-1 font-[600]">{heading}</p>
            <select
                className="w-[380px] min-w-[350px] border-2 border-gray-300 p-2 text-sm h-auto rounded-lg bg-transparent text-black hover:cursor-pointer"
                value={value}
                name={heading.toLowerCase().replace(" ", "_")}
                onChange={(e) => {
                    console.log('value : ', e.target.value);
                    onChange(e);
                }}
            >
                {options.map((option, index) => (
                    <option
                        className="w-[380px] min-w-[350px] border-2 border-gray-300 p-2 text-sm h-[auto] rounded-lg bg-transparent text-black"
                        key={index}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
