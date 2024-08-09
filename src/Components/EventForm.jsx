import React, { useState, useEffect } from 'react';
import Input from '../Components/Input';
import DateInput from '../Components/DateInput';
import MultilinedInput from '../Components/MultilinedInput';
import ImageInput from './ImageUploadInput';
import SelectInput from './SelectInput'


const EventForm = ({ event, onSave, setIsOpen }) => {

    const [formData, setFormData] = useState({
        id: 0,
        title: '',
        city_id: 0,
        cover_picture: "",
        event_date: "",
        location: "",
        longitude: "",
        latitude: "",
        description: "",
        event_time: "",
        category_id: 1,
        region: "",
        price: "",
        status: 0,
        ticket_url: "",
        popular: ""
    });

    useEffect(() => {

        if (event) {

            setFormData({
                id: event.id || 0,
                title: event.title || '',
                city_id: event.city_id || 0,
                cover_picture: event.cover_picture || "",
                event_date: event.event_date || "",
                location: event.location || "",
                longitude: event.longitude || "",
                latitude: event.latitude || "",
                description: event.description || "",
                event_time: event.event_time || "",
                category_id: event.category_id || 1,
                region: event.region || "",
                price: event.price || "",
                status: event.status || 0,
                ticket_url: event.ticket_url || "",
                popular: event.popular || ""
            });
        }
    }, [event]);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const payloadForEventData = new FormData();



        payloadForEventData.append('id', formData.id);
        payloadForEventData.append('title', formData.title);
        payloadForEventData.append('city_id', formData.city_id);
        payloadForEventData.append('event_date', formData.event_date);
        payloadForEventData.append('longitude', formData.longitude);
        payloadForEventData.append('latitude', formData.latitude);
        payloadForEventData.append('description', formData.description);
        payloadForEventData.append('event_time', formData.event_time);
        payloadForEventData.append('category_id', formData.category_id);
        payloadForEventData.append('location', formData.location);
        payloadForEventData.append('region', formData.region);
        payloadForEventData.append('price', formData.price);
        payloadForEventData.append('ticket_url', formData.ticket_url);
        payloadForEventData.append('popular', formData.popular);

        if (formData.cover_picture && formData.cover_picture instanceof File) {
            payloadForEventData.append('cover_picture', formData.cover_picture, formData.cover_picture.name);

        } else if (formData.cover_picture === null) {
            payloadForEventData.append('cover_picture', "");

        } else if (typeof formData.cover_picture === 'string' && formData.cover_picture) {
            payloadForEventData.append('cover_picture', formData.cover_picture);
        }

        onSave(payloadForEventData);
    };



    const popularOptions = [
        { name: 'Yes', value: 'yes' },
        { name: 'No', value: 'no' },
    ]

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white w-auto h-auto min-w-[350px]">
            <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
            <ImageInput value={formData.cover_picture} onChange={handleChange} />
            <Input heading="Title" name="title" value={formData.title} onChange={handleChange} />
            <Input heading="City ID" name="city_id" type="number" value={formData.city_id} onChange={handleChange} />
            <DateInput heading="Event Date" name="event_date" value={formData.event_date} onChange={handleChange} />
            <Input heading="Latitude" name="latitude" type="number" value={formData.latitude} onChange={handleChange} />
            <Input heading="Longitude" name="longitude" type="number" value={formData.longitude} onChange={handleChange} />
            <MultilinedInput heading="Description" name="description" value={formData.description} onChange={handleChange} />
            <Input heading="Event Time" name="event_time" type="time" value={formData.event_time} onChange={handleChange} />
            <Input heading="Category ID" name="category_id" type="number" value={formData.category_id} onChange={handleChange} />
            <Input heading="Location" name="location" value={formData.location} onChange={handleChange} />
            <Input heading="Region" name="region" value={formData.region} onChange={handleChange} />
            <Input heading="Price" name="price" type="number" value={formData.price} onChange={handleChange} />
            <Input heading="Ticket URL" name="ticket_url" value={formData.ticket_url} onChange={handleChange} />
            <SelectInput heading="Popular" name="popular" options={popularOptions} value={formData.popular} onChange={handleChange} />

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Save
                </button>
                <button
                    type="button"
                    className="mx-2 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EventForm;
