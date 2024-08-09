import React from "react";
import Input from "./Input";
import DropdownInput from "./DropdownInput";
import MultilinedInput from "./MultilinedInput";
import ImageInput from "./ImageUploadInput";
import DateInput from "./DateInput";
import Button from "./Button";
import Heading from "./Heading";
import DateTimeInput from "./DateTimeInput";


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

const AddCelebrityForm = (props) => {
    return (
        <>
            <div className="flex justify-between mb-3">
                <Heading title={props.title} />
                <Button name="X" onClick={props.onClick} customClass="font-bold" />
            </div>

            <div class="flex flex-wrap justify-center bg-white rounded-lg w-auto ">
                <div class="flex flex-col items-center px-0 py-7 mx-5 w-auto">
                    <ImageInput />
                    <Input heading="Event Title" />
                    <DateTimeInput heading="Date-Time" />
                    <Input heading="Venue" />
                    <DropdownInput events={monthOptions} heading="Region" />
                    <Input heading="Map Location" />

                </div>

                <div class=" flex  flex-col  px-5 md:py-7 lg:py-7 mx-5 ">
                    <DropdownInput events={monthOptions} heading="Select Celebrity" />
                    <Input heading="Price" />
                    <DropdownInput events={monthOptions} heading="Ticket Link" />
                    <MultilinedInput heading="Description" rows={5} />
                    <div className="wrapper flex justify-end w-[380px]">
                        <Button className="" name="Save " />
                    </div>
                </div>
            </div >

        </>
    );
};

export default AddCelebrityForm;
