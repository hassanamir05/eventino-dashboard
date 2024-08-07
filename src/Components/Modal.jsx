import React from 'react';
import Button from '../Components/Button'


const Modal = ({ isOpen, setIsOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-10">

            <div className="bg-white rounded-lg shadow-lg py-12 px-20 relative ">
                <Button
                    onClick={() => {
                        console.log('clicking the close button in modal');
                        console.log('isopen : ', isOpen)
                        setIsOpen(false)
                        console.log('isopen : ', isOpen)
                    }}
                    name="X"
                    className="absolute top-2 right-2 text-white bg-backgroundColor px-2 text-2xl pb-1 rounded-[50%] "
                />
                {children}
            </div>
        </div >
    );
};

export default Modal;
