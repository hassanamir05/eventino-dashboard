import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ eventData }) => {
    return (
        <>
            <style>
                {`
                ::-webkit-scrollbar {
                    height: 8px;
                }

                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                ::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
                `}
            </style>
            <div className="overflow-x-auto custom-scrollbar">
                <table className="min-w-full bg-white border-lg border-gray-200 rounded-lg shadow-md">
                    <thead className="mb-[10px]">
                        <TableHeader />
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {eventData.map((event, index) => (
                            <TableRow key={index} event={event} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
