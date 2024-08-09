import React from "react";
import Switch from "./Switch";

const TableRow = ({ columns, handleEditClick, handleDeleteClick, event }) => {
    const getStatusColor = (price) => {
        const priceNumber = parseFloat(price);
        return (isNaN(priceNumber) || priceNumber === 0) ? "bg-freeColor" : "bg-paidColor";
    };

    const getStatusText = (price) => {
        const priceNumber = parseFloat(price);
        return (isNaN(priceNumber) || priceNumber === 0) ? "Free" : "Paid";
    };

    const handleEdit = () => {
        console.log('data of the event selected : ', event)
        handleEditClick(event);
    };


    const handleDelete = () => {
        console.log('data of the event selected : ', event)
        handleDeleteClick(event.id)
    }



    return (
        <tr className="border-b border-gray-200 hover:cursor-pointer">
            {columns.map((column, index) => (
                <td
                    key={index}
                    className={`py-3 px-6 text-left font-[400] ${index === 0 ? 'rounded-bl-lg' : ''} ${index === columns.length - 1 ? 'rounded-br-lg' : ''}`}
                    style={{ width: column.width }}
                >
                    {column.accessor === 'title' ? (
                        <div className="flex items-center">
                            <img src={event.cover_picture} alt="cover pic" className="w-10 h-10 object-cover rounded mr-2" />
                            {event[column.accessor]}
                        </div>
                    ) : column.accessor === 'status' ? (
                        <div className="flex items-center">
                            <span className={`text-white py-1 px-5 rounded-full text-sm mr-2 ${getStatusColor(event.price)}`}>
                                {getStatusText(event.price)}
                            </span>
                            <button
                                className="w-4 transform hover:cursor-pointer hover:scale-110 mr-5"
                                onClick={handleEdit}
                            >
                                <i className="fa-regular fa-pen-to-square text-lg px-2"></i>
                            </button>
                            <button className="w-4 mr-2 transform hover:cursor-pointer hover:scale-110 font-medium" onClick={handleDelete}>
                                <i className="fa-solid fa-trash text-lg px-3"></i>
                            </button>
                        </div>
                    ) : column.accessor === 'dateTime' ? (
                        <div>
                            <div>{event.event_date}</div>
                            <div>{event.event_time}</div>
                        </div>
                    ) : column.accessor === 'activeDisable' ? (
                        <Switch status={event.status} />
                    ) : (
                        event[column.accessor]
                    )}
                </td>
            ))}
        </tr>
    );
};

export default TableRow;
