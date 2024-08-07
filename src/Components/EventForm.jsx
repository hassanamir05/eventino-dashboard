import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import MultilinedInput from './MultilinedInput'
import DateInput from './DateInput'


const EventForm = ({ event, onSave, onClick }) => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        region: '',
        event_date: '',
        event_time: '',
        category_name: '',
        description: '',
        price: '',
    });

    useEffect(() => {
        if (event) {
            setFormData(event);
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="min-w-[800px] mx-auto p-6 bg-white rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                    heading="Title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <Input
                    heading="Location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <Input
                    heading="Region"
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <DateInput
                    heading="Event Date"
                    type="date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <Input
                    heading="Event Time"
                    type="time"
                    name="event_time"
                    value={formData.event_time}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <Input
                    heading="Category Name"
                    type="text"
                    name="category_name"
                    value={formData.category_name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <MultilinedInput
                    heading="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <Input heading="Price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <Button name="Save" onClick={onClick} />
        </form>
    );
};

export default EventForm;
