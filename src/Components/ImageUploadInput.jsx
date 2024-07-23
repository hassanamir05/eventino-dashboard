import React, { useState } from 'react';

const ImageInput = () => {
    const [imageSrc, setImageSrc] = useState(null);

    const displayImage = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageSrc(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <div className="w-[400px] bg-transparent h-auto mx-2 my-2 relative" >
            <div className="w-[400px] rounded-lg h-[170px] border-gray-300 flex items-center justify-center bg-inputBackground">
                <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={displayImage}
                    onClick={(e) => { e.stopPropagation(); }} // Prevents click propagation
                    onMouseEnter={(e) => { e.target.style.cursor = 'pointer'; }} // Changes cursor on hover
                />
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="Selected"
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <div className="flex flex-col items-center">
                        <img className='h-6' src='/src/assets/uploadIcon.png' alt="Upload Icon" />
                        <span className="text-gray-500">Upload</span>
                    </div>
                )}
            </div>
        </div >
    );
}

export default ImageInput;
