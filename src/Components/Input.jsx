const Input = (props) => {
    return (
        <div className="my-2">
            <p className="text-md ml-1 mb-1 font-[600]">{props.heading}</p>
            <input className="w-[380px] min-w-350px border-2 border-gray-300 p-2  text-sm h-auto rounded-lg bg-transparent text-black" type={props.type} placeholder={props.heading} />
        </div>);
}

export default Input;