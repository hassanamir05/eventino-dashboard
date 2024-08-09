import React, { useEffect, useState } from "react";
import WelcomeMsg from "../Components/WelcomeMsg";
import SearchBox from '../Components/SearchBox'
import Table from "../Components/Table";
import Filter from "../Components/Filter";
import DateInput from "../Components/DateInput";
import Button from "../Components/Button";
import AddCelebrityEventForm from "../Components/addCelebrityEventForm";
import AddCelebrityForm from "../Components/addCelebrityForm";

const eventData = [
    {
        title: "Atif Aslam",
        venue: "6096 Marjolaine Landing",
        region: "Lorem Ipsum",
        dateTime: "12.09.2019 - 12.53 PM",
        price: "RS1322",
        mapLocation: "map loation",
        description: "Lorem Ipsum",
        status: ""
    },
    {
        title: "Event 2",
        venue: "Venue 2",
        region: "Region 2",
        dateTime: "01.10.2020 - 10.30 AM",
        price: "Rs2321",
        mapLocation: "celebrity Event",
        description: "Description 2",
        status: ""
    },
];

const columns = [
    { label: "Title", accessor: "title", width: '15%' },
    { label: "Date - Time", accessor: "dateTime", width: '18%' },
    { label: "Venue", accessor: "venue", width: '15%' },
    { label: "Region", accessor: "region", width: '15%' },
    { label: "Map Location", accessor: "mapLocation", width: '12%' },
    { label: "Price", accessor: "price", width: '10%' },
    { label: "Description", accessor: "description", width: '15%' },
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

const CelebrityEvent = () => {


    const [showAddForm, setShowAddForm] = useState('table')


    useEffect(() => { }, [])

    const showCelebrityForm = () => {
        setShowAddForm('')
    }

    const showCelebrityEventForm = () => {
        setShowAddForm('celebrity-event')
    }

    const refreshForm = () => {
        setShowAddForm('table')
    }

    return (
        <div className="flex flex-col py-10 px-10 w-full  overflow-scroll overflow-x-hidden h-screen pb-[100px] bg-backgroundColor">
            <WelcomeMsg username="Hassan" message="Here’s what’s happening with your store today." />
            {
                (showAddForm === 'table') ?
                    <>

                        <div className="w-full my-4 flex flex-row-reverse pl-4">
                            <Button name="+Add New" onClick={showCelebrityEventForm} />
                            <Button name="+Celebrity" onClick={showCelebrityForm} />
                            <SearchBox />
                        </div>

                        <div>
                            <div className="flex flex-col bg-white border-0 rounded-md p-5 py-10 my-5">
                                <div className="flex justify-between">
                                    <h1 className="text-3xl font-bold" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>Celebrity Events</h1>
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
                    </>
                    :
                    (showAddForm === 'celebrity-event') ?
                        < AddCelebrityEventForm title="Add New Celebrity Event" onClick={refreshForm} />
                        :
                        <AddCelebrityForm title="Add New Celebrity" onClick={refreshForm} />
            }
        </div >
    );
};

export default CelebrityEvent;