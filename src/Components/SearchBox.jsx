import Button from "./Button";

const SearchBox = () => {

    return (
        <div className="flex items-center border-0 rounded-md w-auto h-11 px-2 bg-white">
            <i className="fa-solid fa-magnifying-glass text-gray-500 mr-3"></i>
            <input
                type="text"
                className="bg-white outline-none flex-grow"
                placeholder="Search here"
            />
        </div>
    );
}




export default SearchBox;