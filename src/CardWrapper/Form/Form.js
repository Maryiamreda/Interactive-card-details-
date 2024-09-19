import React, { useState } from 'react';
import './Form.scss';
const Form = ({ onSubmit }) => {
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');
    console.log(cardholderName)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ cardholderName, cardNumber, expMonth, expYear, cvc });

    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="credit-card-form">
                <div className="form-group">
                    <label htmlFor="cardholderName">CARDHOLDER NAME</label>
                    <input
                        type="text"
                        id="cardholderName"
                        placeholder="e.g. Jane Appleseed"
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <input
                        type="text"
                        id="cardNumber"
                        placeholder="e.g. 1234 5678 9123 0000"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expDate">EXP. DATE (MM/YY)</label>
                        <div className="exp-date-inputs">
                            <input
                                type="text"
                                id="expMonth"
                                placeholder="MM"
                                value={expMonth}
                                onChange={(e) => setExpMonth(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                id="expYear"
                                placeholder="YY"
                                value={expYear}
                                onChange={(e) => setExpYear(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="text"
                            id="cvc"
                            placeholder="e.g. 123"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="submit-button">
                    Confirm
                </button>
            </form>
        </div>)

}

export default Form;