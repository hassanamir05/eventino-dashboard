import React from "react";

const Button = (props) => {
    const { customClass, onClick, name } = props;
    const baseClass = "h-11 px-5 text-bold py-2 bg-[#4CA1EB] rounded-md mx-2 mr-0 text-white sm:w-auto w-full max-w-[130px] hover:bg-blue-400";

    return (
        <button
            className={`${baseClass} ${customClass ? customClass : ""}`}
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default Button;
