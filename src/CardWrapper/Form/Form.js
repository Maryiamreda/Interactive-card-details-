import React, { useState } from 'react';
import './Form.scss';
import { useDispatch } from 'react-redux';
import { updateCardData, setValidation } from '../../store/cardSlice';

const Form = () => {
    const dispatch = useDispatch();

    // Add state for form fields
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const cardData = {
            cardholderName,
            cardNumber,
            expMonth,
            expYear,
            cvc,
        };

        const newErrors = validateForm(cardData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            dispatch(updateCardData(cardData)); // Dispatch the form data to Redux
            dispatch(setValidation(true));
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
            dispatch(updateCardData(cardData)); // Dispatch the form data to Redux
            dispatch(setValidation(false));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validation logic for each field
        if (!cardholderName.trim()) {
            newErrors.cardholderName = "Can't be blank";
        }

        if (!cardNumber.trim()) {
            newErrors.cardNumber = "Can't be blank";
        } else if (!/^(\d{4}\s?){3}\d{4}$/.test(cardNumber.replace(/\s/g, ''))) {
            newErrors.cardNumber = 'Wrong format, numbers only';
        }

        if (!expMonth.trim()) {
            newErrors.expMonth = "Can't be blank";
        } else if (!/^\d{2}$/.test(expMonth) || parseInt(expMonth) < 1 || parseInt(expMonth) > 12) {
            newErrors.expMonth = 'Invalid month';
        }

        if (!expYear.trim()) {
            newErrors.expYear = "Can't be blank";
        } else if (!/^\d{2}$/.test(expYear)) {
            newErrors.expYear = 'Invalid year';
        }

        if (!cvc.trim()) {
            newErrors.cvc = "Can't be blank";
        } else if (!/^\d{3,4}$/.test(cvc)) {
            newErrors.cvc = 'Invalid CVC';
        }

        return newErrors;
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
                        className={errors.cardholderName ? 'error' : ''}
                    />
                    {errors.cardholderName && <span className="error-message">{errors.cardholderName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <input
                        type="text"
                        id="cardNumber"
                        placeholder="e.g. 1234 5678 9123 0000"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className={errors.cardNumber ? 'error' : ''}
                    />
                    {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
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
                                className={errors.expMonth ? 'error' : ''}
                            />
                            <input
                                type="text"
                                id="expYear"
                                placeholder="YY"
                                value={expYear}
                                onChange={(e) => setExpYear(e.target.value)}
                                className={errors.expYear ? 'error' : ''}
                            />
                        </div>
                        {(errors.expMonth || errors.expYear) && (
                            <span className="error-message">{errors.expMonth || errors.expYear}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="text"
                            id="cvc"
                            placeholder="e.g. 123"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            className={errors.cvc ? 'error' : ''}
                        />
                        {errors.cvc && <span className="error-message">{errors.cvc}</span>}
                    </div>
                </div>

                <button type="submit" className="submit-button">
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default Form;
