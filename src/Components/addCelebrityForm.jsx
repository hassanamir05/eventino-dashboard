import ImageInput from "./ImageUploadInput";
import Input from "./Input";
import Heading from "./Heading";
import Button from './Button'


const AddCelebrityForm = (props) => {

    return (
        <>
            <div className="flex justify-between mb-3">
                <Heading title={props.title} />
                <Button name="X" onClick={props.onClick} customClass="font-bold" />
            </div>
            <div class="flex flex-wrap justify-center bg-white rounded-lg w-auto">
                <div class="flex flex-col items-center px-0 py-7 mx-5 w-auto">
                    <ImageInput />
                    <Input heading="Celebrity Name" />
                </div>

                <div class=" flex  flex-col-reverse  px-5 py-7 mx-5 ">
                    <div className="wrapper flex justify-end w-[380px]">
                        <Button name="Save " customClass="min-w-[150px]" />
                    </div>
                </div>
            </div >

        </>);
}


export default AddCelebrityForm;