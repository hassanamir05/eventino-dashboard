import React, { useEffect, useState } from 'react';

const ImageInput = ({ value, onChange }) => {
    const [imageSrc, setImageSrc] = useState(value);
    const [isImageEdited, setIsImageEdited] = useState(false);

    useEffect(() => {
        if (value && typeof value === 'string') {
            setImageSrc(value);
            setIsImageEdited(false); // Mark as not edited initially
        } else if (value && value instanceof Blob) {
            setImageSrc(URL.createObjectURL(value));
            setIsImageEdited(true); // Mark as edited if a Blob is passed in
        }

        return () => {
            if (imageSrc && imageSrc.startsWith('blob:')) {
                URL.revokeObjectURL(imageSrc);
            }
        };
    }, [value]);

    const displayImage = (event) => {
        const input = event.target;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            setImageSrc(URL.createObjectURL(file));
            setIsImageEdited(true);
            onChange({ target: { name: 'cover_picture', value: file } });
        }
    };

    const deleteImage = () => {
        setImageSrc(null);
        setIsImageEdited(true);
        onChange({ target: { name: 'cover_picture', value: null } });
    };

    return (
        <div className="w-[380px] bg-transparent h-auto mx-2 my-2 relative min-w-[320px]">
            <div className="w-[380px] rounded-lg h-[170px] border-gray-300 flex items-center justify-center bg-inputBackground relative min-w-[320px]">
                <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={displayImage}
                    onClick={(e) => { e.stopPropagation(); }}
                    onMouseEnter={(e) => { e.target.style.cursor = 'pointer'; }}
                />
                {imageSrc ? (
                    <>
                        <img
                            src={imageSrc}
                            alt="Selected"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                            className="absolute top-2 right-2 bg-white text-red-500 p-1 px-2 rounded-full focus:outline-none"
                            onClick={deleteImage}
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </>
                ) : (
                    <div className="flex flex-col items-center">
                        <img className='h-6' src='/src/assets/uploadIcon.png' alt="Upload Icon" />
                        <span className="text-gray-500">Upload</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageInput;
