import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ columns, eventData, handleEditClick, handleDeleteClick, event }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = Math.ceil(eventData.length / itemsPerPage);

    const pagesBeforeDots = 2;
    const pagesAfterDots = 1;

    const getPaginationGroup = () => {
        const pages = [];
        const startPage = Math.max(2, currentPage - pagesBeforeDots);
        const endPage = Math.min(totalPages - 1, currentPage + pagesAfterDots);

        if (currentPage > 3) {
            pages.push(1, '...');
        } else {
            for (let i = 1; i < startPage; i++) {
                pages.push(i);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push('...', totalPages);
        } else {
            for (let i = endPage + 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handlePageClick = (page) => {
        if (page === '...') return;
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = eventData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>

            <div className="overflow-x-auto custom-scrollbar">
                <table className="min-w-full bg-white border-lg border-gray-200 rounded-lg shadow-md">
                    <thead className="mb-[10px]">
                        <TableHeader columns={columns} />
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {currentItems.map((event, index) => (
                            <TableRow key={index} event={event} columns={columns} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4 ">
                <div>
                    <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        className="py-1 px-2 border rounded"
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div className="flex justify-end items-center">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="py-1 px-3 text-xl mx-1 bg-[#4CA1EB] rounded text-white disabled:opacity-50"
                    >
                        &lt;
                    </button>
                    {getPaginationGroup().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageClick(page)}
                            className={`py-1 px-3 text-xl mx-1 rounded hover:bg-gray-300 ${currentPage === page ? 'bg-[#4CA1EB] text-white' : 'bg-white'}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="py-1 px-3 text-xl mx-1 bg-[#4CA1EB] text-white rounded disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </>
    );
};

export default Table;
