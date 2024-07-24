import React from 'react';

const Card = (props) => {
    const isPositive = props.change > 0;

    return (
        <div className="card bg-white max-w-[240px] h-auto py-5 px-3 flex flex-col min-w-[224px] rounded-md m-3">
            <div className="upper-row flex flex-row justify-between mb-3">
                <p className="title flex w-full">
                    <img src={props.icon} className="h-7" alt="icon" />
                    <span className="text-sm text-gray-400 font-[600] ml-1">{props.title}</span>
                </p>
                <button className="options text-gray-400 hover:cursor-pointer">
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </div>
            <div className="lower-row flex flex-row items-center">
                <p className="mr-4 text-3xl">{props.number}</p>
                <span
                    className={`px-2 rounded-sm text-sm mt-1 border ${isPositive ? 'bg-green-200 text-green-500 border-green-500' : 'bg-red-200 text-red-500 border-red-500'} hover:cursor-pointer`}
                >
                    {props.change}%
                    {isPositive ?
                        <i className="fa-solid fa-arrow-up-right"></i> :
                        <i className="fa-solid fa-arrow-down-right"></i>
                    }
                </span>
            </div>
        </div>
    );
}

export default Card;
