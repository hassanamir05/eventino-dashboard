import React from "react";

const TableRow = ({ event }) => {
    return (
        <tr className="border-b border-gray-200 hover:cursor-pointer">
            <td className="py-3 px-6 text-left flex items-center min-w-[130px] font-[500]">
                <img src="/src/assets/emoji.png" alt="Event" className="w-10 h-10 object-cover rounded mr-2" />
                {event.title}
            </td>
            <td className="py-3 px-6 text-left  font-[500]  text-sm min-w-[160px]">{event.venue}</td>
            <td className="py-3 px-6 text-left  font-[500] text-sm min-w-[160px]">{event.region}</td>
            <td className="py-3 px-6 text-left font-[500]  text-sm min-w-[160px]">{event.dateTime}</td>
            <td className="py-3 px-6 text-left  font-[500] text-sm min-w-[160px]">{event.category}</td>
            <td className="py-3 px-6 text-left  font-[500] text-sm min-w-[160px]">{event.description}</td>
            <td className="py-3 px-6 text-left  font-[500] text-sm min-w-[180px]">
                <span className={`text-white py-1 px-5 rounded-full text-sm mr-2 ${event.statusColor}`}>{event.status}</span>
                <button className="w-4 mr-2 transform hover:cursor-pointer hover:scale-110">
                    <i className="fa-regular fa-pen-to-square text-lg px-2"></i>
                </button>
                <button className="w-4 mr-2 transform hover:cursor-pointer hover:scale-110 font-medium">
                    <i className="fa-solid fa-trash text-lg px-3"></i>
                </button>
            </td>
        </tr>
    );
};

export default TableRow;
