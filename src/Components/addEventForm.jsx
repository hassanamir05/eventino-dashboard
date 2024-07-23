import React from "react";
import Input from "./Input";
import DropdownInput from "./DropdownInput";
import MultilinedInput from "./MultilinedInput";
import ImageInput from "./ImageUploadInput";
import DateInput from "./DateInput";
import Button from "./Button";

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

const AddEventForm = () => {
    return (
        <>
            <div class="flex flex-wrap justify-center items-center bg-white rounded-lg ">
                <div class="flex flex-col items-center  px-5 py-7 mx-5">
                    <ImageInput />
                    <Input heading="Event Title" />
                    <DateInput heading="Date" />
                    <Input heading="Venue" />
                    <DropdownInput events={monthOptions} heading="Region" />
                    <DropdownInput events={monthOptions} heading="Category" />
                    <Input heading="Map Location" />

                </div>

                <div class=" flex  flex-col items-center px-5 py-7 mx-5 ">
                    <Input heading="Price" />
                    <DropdownInput events={monthOptions} heading="Ticket Link" />
                    <DropdownInput events={monthOptions} heading="Popular Events" />
                    <MultilinedInput heading="Description" rows={5} />
                    <div className="wrapper flex justify-end w-[400px]">
                        <Button className="" name="Save " />
                    </div>
                </div>
            </div >

        </>
    );
};

export default AddEventForm;
