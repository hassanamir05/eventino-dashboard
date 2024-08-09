import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import WelcomeMsg from "../Components/WelcomeMsg";
import Filter from "../Components/Filter";
import Table from "../Components/Table";
import LineChart from "../Components/LineChart";
import { getDashboardService, allEventDetailsService, updateAllEventService, deleteAllEventService } from "../API/api";
import Modal from '../Components/Modal';
import EventForm from "../Components/EventForm";

const columns = [
    { label: "Title", accessor: "title", width: '20%' },
    { label: "Venue", accessor: "location", width: '13.5%' },
    { label: "Region", accessor: "region", width: '15%' },
    { label: "Date - Time", accessor: "dateTime", width: '20%' },
    { label: "Category", accessor: "category_name", width: '13.5%' },
    { label: "Description", accessor: "description", width: '18%' },
    {
        label: "Status",
        accessor: "status",
        render: (status, event) => (
            <span className={`text-white py-1 px-5 rounded-full text-sm mr-2 ${getStatusColor(event.price)}`}>{status}</span>
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

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [eventData, setEventData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [refreshPage, setRefreshPage] = useState('')


    useEffect(() => {

        const fetchDashboardData = async () => {
            try {
                const data = await getDashboardService();
                if (data.status !== 200) throw new Error(`Error: Status code ${data.status}`);
                setDashboardData(data);
            } catch (error) {
                console.error(error);
                setDashboardData({
                    totolEventCount: 0,
                    totolOrganizerCount: 0,
                    totolCelebrityCount: 0,
                    totolPersonalEventCount: 0
                });
            }
        };

        const fetchEventData = async () => {
            try {
                const data = await allEventDetailsService();
                if (data.status !== 200) throw new Error(`Error: Status code ${data.status}`);
                setEventData(data.result);
            } catch (error) {
                console.log(error);
            }
        };


        fetchDashboardData();
        fetchEventData();
    }, [refreshPage]);



    const handleEditClick = (data) => {
        setCurrentEvent(data);
        setIsModalOpen(true);
    };



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

    const handleDeleteClick = (id) => {
        deleteEventData(id);
    }


    const cardData = [
        {
            icon: '/src/assets/Icons/plus.png',
            title: 'Total Event Count',
            number: dashboardData ? dashboardData.totolEventCount : 0,
            change: -28.4
        },
        {
            icon: '/src/assets/Icons/organiser.png',
            title: 'Total Organizer Count',
            number: dashboardData ? dashboardData.totolOrganizerCount : 0,
            change: 28.4
        },
        {
            icon: '/src/assets/Icons/celebrity.png',
            title: 'Total Celebrity Count',
            number: dashboardData ? dashboardData.totolCelebrityCount : 0,
            change: -28.4
        },
        {
            icon: '/src/assets/Icons/user.png',
            title: 'Personal Event Count',
            number: dashboardData ? dashboardData.totolPersonalEventCount : 0,
            change: 28.4
        },
    ];


    return (
        <div className="bg-backgroundColor py-10 px-5 w-full overflow-scroll overflow-x-hidden h-screen pb-[100px]">
            <WelcomeMsg username="Hassan" message="Here’s what’s happening with your store today." />
            <div className="flex h-auto flex-wrap items-center justify-center">
                {cardData.map((card, index) => (
                    <Card key={index} icon={card.icon} title={card.title} number={card.number} change={card.change} className="flex-grow" />
                ))}
            </div>
            <LineChart />
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
                        {eventData.length > 0 ? (
                            <Table columns={columns} eventData={eventData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                        ) : (
                            <p>Failed to fetch data from the API.</p>
                        )}
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} event={currentEvent}>
                <EventForm event={currentEvent} onSave={handleSave} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            </Modal>
        </div>
    );
};

export default Dashboard;

// a --> b --> c
// a -->  --> c
