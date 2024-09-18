import Back from './Back/Back';
import './Cards.scss';
import Front from './Front/Front';
const Cards = () => {
    return (<div className='container'>

        <div className='forFront'>
            <Front />
        </div>
        <div className='forBack'>
            <Back />
        </div>


    </div>);
}

export default Cards;