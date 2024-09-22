import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import React, { useState } from 'react';
import './Wrapper.scss';
import Success from '../../images/icon-complete.svg';
const CardWrapper = () => {
    const [validation, setValidation] = useState(false);

    const [cardData, setCardData] = useState({
        cardholderName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvc: '',
    });
    const onSubmit = (data) => {
        setCardData(data);
    }
    return (<div>
        <Cards cardData={cardData} />
        {validation ? (
            <div className="success-message">
                <img src={Success} alt="Success" className="success-image" />
                <h4 style={{ color: 'black' }}>Thank you!</h4>
                <p style={{ color: 'grey', fontSize: '15px' }}>We've added your card details</p>
                <button className="submit-button" onClick={() => setValidation(false)}>Continue</button>
            </div>
        ) : (
            <Form onSubmit={onSubmit} setValidation={setValidation} />
        )}
    </div>);
}

export default CardWrapper;