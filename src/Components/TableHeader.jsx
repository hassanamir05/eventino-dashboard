import React from "react";

const TableHeader = () => {
    return (
        <tr className="bg-clip-border bg-backgroundColor">
            <td className="py-3 px-6 text-left" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '0px', borderBottomLeftRadius: '15px', borderBottomRightRadius: '0px' }}>Title</td>
            <td className="py-3 px-6 text-left">Venue</td>
            <td className="py-3 px-6 text-left">Region</td>
            <td className="py-3 px-6 text-left">Date - Time</td>
            <td className="py-3 px-6 text-left">Category</td>
            <td className="py-3 px-6 text-left">Description</td>
            <td className="py-3 px-6 text-left" style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '15px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '15px' }}>Status</td>
        </tr>
    );
};

export default TableHeader;
