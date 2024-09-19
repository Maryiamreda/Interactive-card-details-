import './Front.scss';
import React, { useState, useEffect } from 'react';
import cardLogo from '../../../images/card-logo.svg';

const Front = ({ cardholderName, cardNumber, expMonth, expYear }) => {
    // Initialize state for each piece of data
    const [name, setName] = useState('Jane Appleseed');
    const [number, setNumber] = useState('0000 0000 0000 0000');
    const [month, setMonth] = useState('00');
    const [year, setYear] = useState('00');

    // Update state when props change using useEffect
    useEffect(() => {
        if (cardholderName) {
            setName(cardholderName);
        }
    }, [cardholderName]);

    useEffect(() => {
        if (cardNumber) {
            setNumber(cardNumber);
        }
    }, [cardNumber]);

    useEffect(() => {
        if (expMonth) {
            setMonth(expMonth);
        }
    }, [expMonth]);

    useEffect(() => {
        if (expYear) {
            setYear(expYear);
        }
    }, [expYear]);

    return (
        <div className="front">
            <div>
                <img src={cardLogo} width="55px" height="32px" alt="Card Logo" />
            </div>
            <div className="info">
                <div className="cardNumber">{number}</div>
                <div className="cardBottom">
                    <div>{name}</div>
                    <div className="date">{month}/{year}</div>
                </div>
            </div>
        </div>
    );
};

export default Front;
