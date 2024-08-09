import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const Card = (props) => {
    const isPositive = props.change > 0;

    return (
        <div className="card bg-white h-auto py-5 px-3 flex flex-col rounded-md m-3 flex-grow">
            <div className="upper-row flex flex-row justify-between mb-3">
                <p className="title flex w-full">
                    <img src={props.icon} className="h-7" alt="icon" />
                    <span className="text-sm text-gray-400 font-[600] ml-1 mt-1">{props.title}</span>
                </p>

            </div>
            <div className="lower-row flex flex-row items-center">
                <p className="mr-4 text-3xl">{props.number}</p>



                <span style={{ fontFamily: 'Inter' }}
                    className={`px-2 rounded-sm text-sm mt-1 border ${isPositive ? 'bg-green-200 text-green-500 border-green-300' : 'bg-red-200 text-red-500 border-red-300'} hover:cursor-pointer text-sm`}
                >
                    {props.change}%
                    {isPositive ?
                        <NorthEastIcon style={{ fontSize: '17px', marginBottom: "3px", marginLeft: "2px" }} /> :
                        <SouthEastIcon style={{ fontSize: '17px', marginBottom: "3px", marginLeft: "2px" }} />
                    }
                </span>


            </div>
        </div>
    );
}

export default Card;
