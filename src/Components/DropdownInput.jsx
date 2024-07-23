const DropdownInput = (props) => {
    return (
        <div className="my-2 ">
            <p className="text-md ml-1 mb-1 font-[600]">{props.heading}</p>
            <select className="w-[400px] border-2 border-gray-300 p-2 text-sm h-auto rounded-lg bg-transparent  text-black hover:cursor-pointer">
                {props.events.map((option, index) => (
                    <option key={index} className="text-gray-500 bg-white" value={option.toLowerCase().replace(" ", "-")}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropdownInput;
