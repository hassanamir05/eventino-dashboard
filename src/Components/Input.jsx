const Input = ({ heading, name, type = 'text', value, onChange }) => {
    return (

        <div className="my-2">
            <p className="text-md ml-1 mb-1 font-[600]">{heading}</p>
            <input
                className="w-[380px] min-w-[350px] border-2 border-gray-300 p-2 text-sm h-auto rounded-lg bg-transparent text-black"
                value={value}
                type={type}
                name={name}
                placeholder={heading}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
