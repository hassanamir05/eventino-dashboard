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

const AddOrganiserForm = (props) => {
    return (
        <>
            <Heading title={props.title} />
            <div class="flex flex-wrap justify-center bg-white rounded-lg w-auto ">
                <div class="flex flex-col items-center  py-7 mx-5 w-auto">
                    <ImageInput />
                    <Input heading="Organiser Name" />
                    <DateTimeInput heading="Availability" />
                    <Input heading="Contact Number" />
                </div>

                <div class=" flex  flex-col  px-5 py-7 mx-5 ">
                    <MultilinedInput heading="About" rows={7} />
                    <Input heading="Map Location" />
                    <div className="wrapper flex justify-end w-[380px]">
                        <Button className="" name="Save " />
                    </div>
                </div>
            </div >

        </>
    );
};

export default AddOrganiserForm;
