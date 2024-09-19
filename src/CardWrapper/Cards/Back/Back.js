import './Back.scss';
import { useState, useEffect } from 'react';

const Back = ({ cvc }) => {
    const [cvcValue, setCvcValue] = useState('000');

    // Use useEffect to update the state when the cvc prop changes
    useEffect(() => {
        if (cvc) {
            setCvcValue(cvc);
        }
    }, [cvc]);

    return (
        <div className="back">
            <div className="cvc">{cvcValue}</div>
        </div>
    );
};

export default Back;
