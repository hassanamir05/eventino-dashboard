import React from "react";

const TableHeader = ({ columns }) => {
    return (
        <tr className="bg-clip-border bg-backgroundColor">
            {columns.map((column, index) => (
                <td
                    key={index}
                    className={`py-3 px-6 font-[600] text-left ${index === 0 ? 'rounded-tl-2xl rounded-bl-2xl' : ''} ${index === columns.length - 1 ? 'rounded-tr-2xl rounded-br-2xl' : ''}`}
                >
                    {column.label}
                </td>
            ))}
        </tr>
    );
};

export default TableHeader;
