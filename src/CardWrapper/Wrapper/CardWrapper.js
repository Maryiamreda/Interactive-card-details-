import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import React from 'react';
import './Wrapper.scss';
import Success from '../../images/icon-complete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setValidation } from '../../store/cardSlice';

const CardWrapper = () => {
    const dispatch = useDispatch();
    const { validation } = useSelector(state => state.card);

    return (
        <div>
            <Cards />
            {validation ? (
                <div className="success-message">
                    <img src={Success} alt="Success" className="success-image" />
                    <h4 style={{ color: 'black' }}>Thank you!</h4>
                    <p style={{ color: 'grey', fontSize: '15px' }}>We've added your card details</p>
                    <button className="submit-button" onClick={() => dispatch(setValidation(false))}>
                        Continue
                    </button>
                </div>
            ) : (
                <Form />
            )}
        </div>
    );
}

export default CardWrapper;
