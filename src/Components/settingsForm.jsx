import { Select } from "@mui/material";
import Heading from "./Heading";
import Input from "./Input";
import SelectInput from "./SelectInput";
import Button from './Button';


const rolesData = [
    { name: "Admin", value: "admin" },
    { name: "User", value: "user" },

];



const SettingsForm = () => {
    return <div className="flex flex-col bg-white border-0 rounded-md p-5 py-10 my-5">
        <Heading title="Change Password" />
        <Input type="password" heading="Password" />
        <Input type="password" heading="Retype Password" />
        <br /><br />
        <Heading title="Add New Role" />
        <SelectInput options={rolesData} heading="Select Name" />
        <br /><br /><br />
        <Button name="Save" />

    </div>
}


export default SettingsForm;