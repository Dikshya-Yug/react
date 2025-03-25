import React from "react";

const Modal = ({ isOpen, onClose, description }) => {
    if (!isOpen) return null;

    return (
        <div className="flex fixed inset-0 flex justify-center items-center z-50" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-96 text-blue-700">
                <i className="fa-solid fa-thumbs-up text-9xl" ></i>
                <p className='py-2 text-lg'>Great Job!</p>
                <p className="text-lg">{description}</p>
                <button onClick={onClose} className="mt-6 bg-blue-700 text-white px-4 py-2 rounded w-1/3" >Close</button>
            </div>
        </div>
    );
};

export default Modal;
