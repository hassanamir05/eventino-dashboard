import React from "react";

const TableRow = ({ event, columns }) => {
    return (
        <tr className="border-b border-gray-200 hover:cursor-pointer">
            {columns.map((column, index) => (
                <td
                    key={index}
                    className={`py-3 px-6 text-left font-[400] ${index === 0 ? 'rounded-bl-lg' : ''} ${index === columns.length - 1 ? 'rounded-br-lg' : ''}`}
                >
                    {column.accessor === 'title' ? (
                        <div className="flex items-center">
                            <img src="/src/assets/emoji.png" alt="Event" className="w-10 h-10 object-cover rounded mr-2" />
                            {event[column.accessor]}
                        </div>
                    ) : column.accessor === 'status' ? (
                        <div className="flex items-center">
                            {event[column.accessor] && (
                                <span className={`text-white py-1 px-5 rounded-full text-sm mr-2 ${event.statusColor}`}>
                                    {event[column.accessor]}
                                </span>
                            )}
                            <button className="w-4 mr-2 transform hover:cursor-pointer hover:scale-110">
                                <i className="fa-regular fa-pen-to-square text-lg px-2"></i>
                            </button>
                            <button className="w-4 mr-2 transform hover:cursor-pointer hover:scale-110 font-medium">
                                <i className="fa-solid fa-trash text-lg px-3"></i>
                            </button>
                        </div>
                    ) : (
                        event[column.accessor]
                    )}
                </td>
            ))}
        </tr>
    );
};

export default TableRow;
