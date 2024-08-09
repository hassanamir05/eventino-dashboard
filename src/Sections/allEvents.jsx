import React, { useEffect } from "react";
import WelcomeMsg from "../Components/WelcomeMsg";
import SearchBox from '../Components/SearchBox'
import Table from "../Components/Table";
import Filter from "../Components/Filter";
import AddEventForm from "../Components/addEventForm";
import DateInput from "../Components/DateInput";
import Button from "../Components/Button";
import Switch from "../Components/Switch";
import DateTimeInput from "../Components/DateTimeInput";
import { useState } from "react";
import Modal from "../Components/Modal";
import EventForm from "../Components/EventForm";
import { allEventDetailsService, updateAllEventService, deleteAllEventService } from "../API/api";


const eventData = [
    {
        title: "Atif Aslam",
        venue: "6096 Marjolaine Landing",
        region: "Lorem Ipsum",
        dateTime: "12.09.2019 - 12.53 PM",
        category: "Celebrity Event",
        description: "Lorem Ipsum",
        status: 0,
        activeDisable: <Switch status="1" />,
    },
    {
        title: "Event 2",
        venue: "Venue 2",
        region: "Region 2",
        dateTime: "01.10.2020 - 10.30 AM",
        category: "Music",
        description: "Description 2",
        status: 1,
        activeDisable: <Switch status="0" />,
    },
];

const columns = [
    { label: "Title", accessor: "title", width: '15%' },
    { label: "Venue", accessor: "location", width: '20%' },
    { label: "Region", accessor: "region", width: '10%' },
    { label: "Date - Time", accessor: "dateTime", width: '18%' },
    { label: "Category", accessor: "category_name", width: '10%' },
    { label: "Description", accessor: "description", width: '15%' },
    // { label: "Active/Disable", accessor: "activeDisable", width: '12%' },
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

const AllEvents = () => {

    const [eventData, setEventData] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [refreshPage, setRefreshPage] = useState('')


    const updateEventData = async (updatedData) => {
        try {
            const data = await updateAllEventService(updatedData);

            if (data.status !== 200) throw new Error(`Error: Status code ${data.status}`);

            console.log('message from API : ', data.message)
            console.log('data that was passed to the api : ', updatedData);

            setRefreshPage();

        }

        catch (e) {
            console.log(e)
        }
    }


    const deleteEventData = async (eventId) => {
        try {

            const response = await deleteAllEventService(eventId);

            if (response.status !== 200) throw new Error(`Error: Status code ${response.status}`);


            console.log('MEssag from the API : ', response.message);

        }
        catch (e) {

        }
    }


    const handleSave = (updatedEvent) => {
        console.log('Updated Event:', updatedEvent);
        updateEventData(updatedEvent);
        setIsModalOpen(false);
    };


    const handleEditClick = (data) => {
        setCurrentEvent(data);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (id) => {
        deleteEventData(id);
    }

    useEffect(() => {


        const fetchEventData = async () => {


            try {
                const data = await allEventDetailsService();
                if (data.status !== 200) throw new Error(`Error: Status code ${data.status}`);
                setEventData(data.result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchEventData();


    }, [])


    const toggleForm = () => {
        setShowAddForm(!showAddForm);
    }


    return (
        <div className="flex flex-col py-10 px-10 w-full overflow-scroll overflow-x-hidden  h-screen pb-[100px] bg-backgroundColor">

            <WelcomeMsg username="Hassan" message="Here’s what’s happening with your store today." />
            {
                !showAddForm ?

                    <>
                        <div className="w-full my-4 flex flex-row-reverse pl-4">
                            <Button name="+Add New" onClick={toggleForm}></Button>
                            <SearchBox />
                        </div>
                        <div>
                            <div className="flex flex-col bg-white border-0 rounded-md p-5 py-10 my-5">
                                <div className="flex justify-between">
                                    <h1 className="text-3xl font-bold" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>All Events</h1>
                                    <div className="filters flex space-x-4 max-h-10">
                                        <Filter options={filterOptions} />
                                        <Filter options={monthOptions} />
                                    </div>
                                </div>
                                <div className="overflow-x-auto mt-6">
                                    <Table columns={columns} eventData={eventData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                                </div>
                            </div>
                        </div>
                        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} event={currentEvent}>
                            <EventForm event={currentEvent} onSave={handleSave} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                        </Modal>
                    </>
                    : <AddEventForm title="Add Event Details" onClick={toggleForm} />
            }
        </div >
    );
};

export default AllEvents;
