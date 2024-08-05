const InputBox = (props) => {
    return <div style={{ fontFamily: 'Inter' }} className="flex flex-col w-[424px] min-w-[350px]  justify-center mt-7">
        <label className="text-[#A6A6A6] font-[400] text-md ml-2 mb-1" htmlFor={props.type}>{props.label}</label>
        <input className="w-auto min-w-[350px] max-w[421px] border py-3 px-4 rounded-md text-black font-[500] focus:outline-none hover:cursor-text placeholder:text-black" type={props.type} placeholder={props.placeholder} id={props.type} />
    </div>
}

export default InputBox;