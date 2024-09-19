import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import React, { useState } from 'react';
import './Wrapper.scss';
const CardWrapper = () => {
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
        <Form onSubmit={onSubmit} />
    </div>);
}

export default CardWrapper;