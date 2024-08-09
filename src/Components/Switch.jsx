import React, { useState } from 'react';
import './Switch.css';

const Switch = ({ status }) => {
    console.log('status  : ', status)
    const [isOn, setIsOn] = useState(status === "1");


    return (
        <div className={`switch ${isOn ? 'on' : 'off'}`}>
            <div className="switch-handle"></div>
        </div>
    );
};

export default Switch;
