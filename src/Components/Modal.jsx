import React from 'react';
import ReactDOM from 'react-dom';
import { cloneElement } from 'react';

const Modal = ({ isOpen, setIsOpen, children, event }) => {
    if (!isOpen) return null;

    const enhancedChildren = React.Children.map(children, child =>
        cloneElement(child, { isOpen, setIsOpen, event })
    );

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white py-6 rounded-lg shadow-lg scroll-m-0 max-h-[700px] h-auto w-auto overflow-auto  relative">
                <style>
                    {`
                        .modal-content::-webkit-scrollbar {
                            display: none;
                        }
                        
                        .modal-content {
                            -ms-overflow-style: none;  
                            scrollbar-width: none;   
                        }
                    `}
                </style>
                <div className="modal-content">
                    {enhancedChildren}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
