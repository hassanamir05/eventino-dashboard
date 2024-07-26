import React from "react";
import WelcomeMsg from "../Components/WelcomeMsg";
import SearchBox from '../Components/SearchBox'
import Table from "../Components/Table";
import Filter from "../Components/Filter";
import AddOrganiserForm from "../Components/addOrganiserForm";
import DateInput from "../Components/DateInput";
import Button from "../Components/Button";

const eventData = [
    {
        organiserName: "Event 1",
        availability: "01.10.2020 - 10.30 AM",
        contactNumber: "+92 123 456 789",
        mapLocation: "map location",
        about: "lorem ipsum",
        status: "",
    },
    {
        organiserName: "Event 2",
        availability: "01.10.2020 - 10.30 AM",
        contactNumber: "+92 987 654 321",
        mapLocation: "map location",
        about: "lorem ipsum",
        status: "",
    },
];

const columns = [
    { label: "Organiser Name", accessor: "organiserName" },
    { label: "Availabilty", accessor: "availability" },
    { label: "Contact Number", accessor: "contactNumber" },
    { label: "Map Location", accessor: "mapLocation" },
    { label: "About", accessor: "about" },
    {
        label: "",
        accessor: "status",
        render: (status, event) => (
            <span className={`text-white py-1 px-5 rounded-full text-sm mr-2 ${eventData.statusColor}`
            } > {status}</ span>

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

const EventOrganizer = () => {
    return (
        <div className="flex flex-col py-10 px-10 w-full  overflow-scroll overflow-x-hidden h-screen pb-[100px]  bg-backgroundColor">
            <WelcomeMsg username="Hassan" message="Here’s what’s happening with your store today." />
            <div className="w-full my-4 flex flex-row-reverse pl-4">
                <Button name="+Add New"></Button>
                <SearchBox />
            </div>
            <AddOrganiserForm title="Add New Organiser" />
            <div>
                <div className="flex flex-col bg-white border-0 rounded-md p-5 py-10 my-5">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>Organiser Details</h1>
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

export default EventOrganizer;
