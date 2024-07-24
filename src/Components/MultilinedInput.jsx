const MultilinedInput = (props) => {
    return (
        <div className="my-2">
            <p className="text-md ml-1 mb-1 font-[600]">{props.heading}</p>
            <textarea
                className="w-[380px] border-2 border-gray-300 p-2 text-sm rounded-lg bg-transparent text-black"
                rows={props.rows || 5}
                placeholder={props.heading}
            />
        </div>
    );
}

export default MultilinedInput;
