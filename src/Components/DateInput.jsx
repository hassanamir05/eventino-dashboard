import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const DateInput = (props) => {
    const inputRef = React.useRef(null);

    const handleIconClick = () => {
        inputRef.current.showPicker();
    };

    return (
        <div className="my-2 relative ">
            <p className="text-sm ml-1 mb-1 font-[600]">{props.heading}</p>
            <div className="w-[400px] border-2 border-gray-300 p-2 text-sm h-auto rounded-lg bg-transparent text-black flex items-center">
                <input
                    className="w-full bg-transparent outline-none"
                    type="date"
                    placeholder={props.heading}
                    value={props.value}
                    onChange={props.onChange}
                    ref={inputRef}
                />
            </div>
        </div>
    );
}

export default DateInput;
