import Back from './Back/Back';
import './Cards.scss';
import { useSelector, useDispatch } from 'react-redux';

import Front from './Front/Front';
const Cards = ({ cardData }) => {
    const { cardholderName, cardNumber, expMonth, expYear, cvc } = useSelector(state => state.card);


    return (<div className='container'>

        <div className='forFront'>
            <Front
                cardholderName={cardholderName}
                cardNumber={cardNumber}
                expMonth={expMonth}
                expYear={expYear}
            />        </div>
        <div className='forBack'>
            <Back cvc={cvc} />
        </div>


    </div>);
}

export default Cards;