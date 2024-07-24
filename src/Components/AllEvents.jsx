import React from "react";
import WelcomeMsg from "./WelcomeMsg";
import SearchBox from './SearchBox'
import Table from "./Table";
import Filter from "./Filter";
import AddEventForm from "./addEventForm";
import DateInput from "./DateInput";

const eventData = [
    {
        title: "Atif Aslam",
        venue: "6096 Marjolaine Landing",
        region: "Lorem Ipsum",
        dateTime: "12.09.2019 - 12.53 PM",
        category: "Celebrity Event",
        description: "Lorem Ipsum",
        status: "Free",
        statusColor: "bg-freeColor"
    },
    {
        title: "Event 2",
        venue: "Venue 2",
        region: "Region 2",
        dateTime: "01.10.2020 - 10.30 AM",
        category: "Music",
        description: "Description 2",
        status: "Paid",
        statusColor: "bg-paidColor"
    },
];

const columns = [
    { label: "Title", accessor: "title" },
    { label: "Venue", accessor: "venue" },
    { label: "Region", accessor: "region" },
    { label: "Date - Time", accessor: "dateTime" },
    { label: "Category", accessor: "category" },
    { label: "Description", accessor: "description" },
    {
        label: "Status",
        accessor: "status",
        render: (status, event) => (
            <span className={`text-white py-1 px-5 rounded-full text-sm mr-2 ${eventData.statusColor}`}>{status}</span>
        )
    },
];

const filterOptions = [
    "Filter",
    "Filter 1",
    "Filter 2",
    "Filter 3",
    "Filter 4",
    "Filter 5"
];

const monthOptions = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const CelebrityEvents = () => {
    return (
        <div className="flex flex-col py-10 px-10 w-full min-h-auto  bg-backgroundColor">
            <WelcomeMsg />
            <SearchBox />
            <AddEventForm title="Add Events Details" />
            <div>
                <div className="flex flex-col bg-white border-0 rounded-md p-5 py-10 my-5">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>All Events Details</h1>
                        <div className="filters flex space-x-4 max-h-10">
                            <Filter options={filterOptions} />
                            <Filter options={monthOptions} />
                        </div>
                    </div>
                    <div className="overflow-x-auto mt-6">
                        <Table columns={columns} eventData={eventData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CelebrityEvents;
